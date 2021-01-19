import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rtcbasic',
  templateUrl: './rtcbasic.component.html',
  styleUrls: ['./rtcbasic.component.less']
})
export class RTCBasicComponent implements OnInit {
  public photoURL;
  public photoName: '';

  public fileBlob;
  public fileBlob2;

  constructor() { }

  ngOnInit() {
  }

  public fileHandler(event): void {
    // console.log(event, 'event');
    if (!event.target.files[0] || !event.target.files.length) {
      console.error('Możesz dodać plik');
      return;
    }

    if (event.target.files[0].type.match(/image\/*/) === null) {
      console.error('Możesz dodać tylko zdjęcie');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.photoURL = reader.result;
    };
  }

  // oczytywanie pliku w formie promise;

  public changeFile(file): Promise<any> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
  }

  public fileHandler2(event): void {
    const file = event.target.files[0];
    const fileType = file.type;
    console.log(fileType, 'fileType');
    this.changeFile(file).then((base64: string): any => {
      // console.log(base64, 'BASED 64');
      this.fileBlob = new Blob([base64], {type: fileType });
      // console.log(this.fileBlob, 'FileBloB');
    });
  }

  // połączenie 2 na raz? bez promise;
  public fileHandler3(event): void {
    if (!event.target.files[0] || !event.target.files.length) {
      console.error('Możesz dodać plik');
      return;
    }

    if (event.target.files[0].type.match(/image\/*/) === null) {
      console.error('Możesz dodać tylko zdjęcie');
      return;
    }
    console.log(event.target.files[0], 'event.target.files[0]');
    this.photoName = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.photoURL = reader.result; // to jako do wyświetlanie,
      this.fileBlob2 = new Blob([reader.result], {type: event.target.files[0].type}); // to na server jeśli bombel
      console.log(this.fileBlob2, 'blob2 na server');
    };
  }

}
