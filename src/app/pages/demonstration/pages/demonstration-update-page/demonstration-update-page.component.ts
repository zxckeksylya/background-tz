import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../../../../core/service/repository.service';
import { Subject, switchMap, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-demonstration-update-page',
  templateUrl: './demonstration-update-page.component.html',
  styleUrls: ['./demonstration-update-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemonstrationUpdatePageComponent implements OnInit {
  public tableItem: any;
  public jsonForm: any;

  private destroy$ = new Subject<void>();

  constructor(
    private repository: RepositoryService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => params.getAll('id')),
        take(1),
      )
      .subscribe(id => {
        this.tableItem = this.repository.getTableItemById(Number(id));
        this.jsonForm = this.repository.getFormById(this.tableItem.jsonID);
      });
  }

  public saveEditItem(item: any): void {
    this.repository.updateTableItem(item, this.tableItem.id);
    this.route.navigate(['']);
  }
}
