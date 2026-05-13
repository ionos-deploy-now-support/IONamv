import { Routes } from '@angular/router';
import { DisplayFamily } from './features/display-family/display-family';
import { EditFamily } from './features/edit-family/edit-family';
import { EditMember } from './features/edit-member/edit-member';
import { MemberList } from './features/member-list/member-list';
import { familyResolver } from './resolvers/family-resolver';
import { Tutoring } from './tutoring';

export const tutoringRoutes: Routes = [
  {
    path: '',
    component: Tutoring,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'addFamily', component: EditFamily },
      { path: 'family/:familyId', component: DisplayFamily, resolve: { ready: familyResolver } },
      { path: 'list', component: MemberList },
      { path: 'add', component: EditMember },
      { path: 'edit/:id', component: EditMember },
    ],
  },
];
