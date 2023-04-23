import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { take } from 'rxjs/operators';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent {

  skillFormGroup = new FormGroup({
    label: new FormControl('', Validators.required),
    level: new FormControl(0, Validators.compose([Validators.min(0), Validators.max(100)]) ),
    skillType: new FormControl('front')
  })

  skillTypeOptions = [
    {label: "Frontend", value: "front"},
    {label: "Backend", value: "back"},
    {label: "Divers", value: "misc"}
  ]

  private editMod: boolean;
  private skill?: Skill;

  private afterSubmit: Function;

  constructor(private toastService: ToastService,
    private skillService: SkillService, private config: DynamicDialogConfig) {

    const data = this.config.data.data;
    this.afterSubmit = data.afterSubmit;
    this.editMod = data.editMod;
    this.skill = data.skill;

    if(this.editMod) {
      this.skillFormGroup.patchValue({
        label: data.skill.label,
        level: data.skill.level,
        skillType: data.skill.type
      })
    }
    else {
      this.skillFormGroup.patchValue({
        label: "",
        level: 0,
        skillType: "front"
      })
    }
  }


  onSubmit(){

    const skill = {
      id: this.skill ? this.skill.id : undefined,
      label: this.skillFormGroup.controls['label'].value,
      level: this.skillFormGroup.controls['level'].value,
      type: this.skillFormGroup.controls['skillType'].value
    };

    if(this.editMod) {
      this.skillService.editSkill(skill).pipe(take(1)).subscribe(
        (newSkill) => {
          this.toastService.success("Compétence éditée avec succès");
          this.afterSubmit({newSkill, editMod: this.editMod});
        },
        err => this.toastService.danger("Une erreur s'est produite")
      )
    }
    else {
      this.skillService.createSkill(skill).pipe(take(1)).subscribe(
        (newSkill) => {
          this.toastService.success("Compétence créée avec succès");
          this.config.data.data.afterSubmit({newSkill, editMod: this.editMod})
        },
        err => this.toastService.danger("Une erreur s'est produite")
      );

    }


  }

}
