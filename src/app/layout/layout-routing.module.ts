import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'appusers', loadChildren: () => import('./appusers/appusers.module').then(m => m.AppusersModule) },
            { path: 'approles', loadChildren: () => import('./approles/approles.module').then(m => m.ApprolesModule) },
            { path: 'apppages', loadChildren: () => import('./apppages/apppages.module').then(m => m.ApppagesModule) },
            { path: 'topicsmoderz', loadChildren: () => import('./topicmoderz/topicmoderz.module').then(m => m.TopicmoderzModule) },
            { path: 'postsmoderz', loadChildren: () => import('./postsmoderz/postsmoderz.module').then(m => m.PostsmoderzModule) },
            { path: 'managetopics', loadChildren: () => import('./managetopics/managetopics.module').then(m => m.ManagetopicsModule) }
            
        ]
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
