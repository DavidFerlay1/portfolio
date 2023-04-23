import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { ProjectService } from '../services/project.service';
import { SkillService } from '../services/skill.service';
import { ExperienceService } from '../services/experience.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../services/mail.service';
import { take } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';
import { CommentComponent } from '../components/misc/comment/comment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  isAnchorsNavVisible: boolean = false;
  activityDuration: number = Math.ceil((Date.now() - new Date('01/05/2021').getTime()) / 1000 / 3600 / 24 / 365);

  navUnderlineIndex = 0;

  emailFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  @ViewChild("grid") grid!: ElementRef<HTMLElement>;
  @ViewChildren("navLink") navLinks!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('anchor') anchors?: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('comments') commentWrapper!: ElementRef<HTMLElement>;
  @ViewChildren('comment') commentElements?: QueryList<CommentComponent>;

  comments = [1, 2];
  currentCommentIndex = 0;

  constructor(public skillService: SkillService,
              public projectService: ProjectService,
              public navigationService: NavigationService,
              public experienceService: ExperienceService,
              private toastService: ToastService,
              private mailService: MailService,
              private renderer: Renderer2) { }


  ngAfterViewInit(): void {
    this.navigationService.setAnchors(this.anchors!.toArray().map(child => child.nativeElement));
    console.log(this.commentElements?.get(0), this.commentWrapper)
    this.commentElements?.get(0)?.toggleShown(true);
    setInterval(() => {
      this.commentElements?.get(this.currentCommentIndex)?.toggleShown(false);
      if(this.currentCommentIndex >= this.commentElements!.length - 1)
        this.currentCommentIndex = 0;
      else
        this.currentCommentIndex++;

      this.commentElements?.get(this.currentCommentIndex)?.toggleShown(true);
      this.renderer.setStyle(this.commentWrapper.nativeElement, 'transform', `translateX(-${100 * this.currentCommentIndex}%)`);

    }, 5000)
  }

  onResumeNavLinkClick(index: number) {
    this.navLinks.forEach((navLink, i) =>  {
      if(index === i)
        this.renderer.addClass(navLink.nativeElement, "active")
      else
        this.renderer.removeClass(navLink.nativeElement, "active")
    })

    this.navUnderlineIndex = index;

    this.renderer.setStyle(this.grid.nativeElement, "transform", `translateX(${index * 100 * -1}vw)`);
  }

  sendMail() {
    this.mailService.sendMail(this.emailFormGroup.value).pipe(take(1)).subscribe(() => {
      this.toastService.success('Votre email a bien été délivre, merci pour votre confiance !');
      this.navigationService.scrollTo('begin');
      this.emailFormGroup.reset();
    },
    err => this.toastService.danger("Une erreur s'est produite, veuillez réessayer ultérieurement"));
  }

}
