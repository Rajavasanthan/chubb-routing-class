import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray, FormControl } from "@angular/forms";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  userForm;
  favFood = [
    {
      name: "Food 1",
      value: "food1",
    },
    {
      name: "Food 2",
      value: "food2",
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      username: this.fb.control(""),
      favFood: new FormArray([]),
    });
  }

  displayForm() {
    console.log(this.userForm.value);
  }

  checkBoxChange(event) {

    let favFoodArray: FormArray = this.userForm.get("favFood") as FormArray;

    if (event.target.checked) {
      favFoodArray.push(new FormControl(event.target.value));
    }else{
      let i = 0;
      favFoodArray.controls.forEach((control:FormControl) => {
        if(control.value == event.target.value){
          favFoodArray.removeAt(i);
          return;
        }
        i++;
      })
    }
  }
}
