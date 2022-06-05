import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { take } from 'rxjs/operators';
import { SkillFormComponent } from 'src/app/components/forms/skill-form/skill-form.component';
import { Skill } from 'src/app/models/skill';
import { AppDialogService } from 'src/app/services/app-dialog.service';
import { SkillService } from 'src/app/services/skill.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-skill-admin',
  templateUrl: './skill-admin.component.html',
  styleUrls: ['./skill-admin.component.scss']
})
export class SkillAdminComponent {

  selectedSkill?: Skill;

  @ViewChildren("frontSkill") frontSkillList!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren("backSkill") backSkillList!: QueryList<ElementRef<HTMLElement>>;

  constructor(public skillService: SkillService,
    private toastService: ToastService,
    private dialogService: AppDialogService) { }


  selectSkill(skill: Skill, refresh: boolean = false) {
    this.selectedSkill = skill;
    const skillType = skill.type;
    const targetList = skillType === "front" ? this.frontSkillList : this.backSkillList;
    const skillItem = targetList.find(item => item.nativeElement.id === skill.id)?.nativeElement;

    if(skillItem?.classList.contains('selected') && !refresh) {
      this.selectedSkill = undefined;
    }
    else {
      this.selectedSkill = skill;
    }

  }

  openFormDialog(editMod: boolean = false, skill: Skill | null = null) {

    if(!editMod && this.selectedSkill)
      this.selectSkill(this.selectedSkill);

    const dialogRef = this.dialogService.open(SkillFormComponent, editMod ? "Modifier une compétence" : "Ajouter une compétence", {
      panelClass: 'dialogs-ref',
      data: {
        editMod,
        skill,
        afterSubmit: (data: {newSkill: Skill, editMod: boolean}) => {this.afterSkillFormSubmit(data); dialogRef.close();}
      }

    });
  }


  afterSkillFormSubmit(response: any) {
    const newSkill = response.newSkill;
    const editMod = response.editMod;

    if(editMod) {
      this.skillService.updateSkillInList(newSkill);
      this.selectSkill(newSkill, true);
    }
    else {
      this.skillService.addSkillInList(newSkill);
      this.selectSkill(newSkill);
    }
  }

  deleteSkill(skill: Skill) {

    console.log("delete")

    this.dialogService.confirmDialog({
      afterYes: () => {
        this.skillService.deleteSkill(skill).pipe(take(1)).subscribe(
          () => {
            this.skillService.removeSkillFromList(skill);
            this.toastService.success("Compétence supprimée avec succès");
            this.dialogService.close();
            this.selectedSkill = undefined;
          },
          () => {
            this.toastService.danger("Une erreur s'est produite");
          }
        )
      },
      message: `Êtes-vous sûr de vouloir supprimer ${skill.label} ?`,
      disableYes: true
    });

  }

}
