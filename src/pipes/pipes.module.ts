import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { SearchClientePipe } from './search-cliente/search-cliente';
import { SortClientePipe } from './sort-cliente/sort-cliente';
import { SearchProductoPipe } from './search-producto/search-producto';
@NgModule({
	declarations: [SearchClientePipe,SortClientePipe, SearchProductoPipe ],
	imports: [CommonModule],
	exports: [SearchClientePipe,SortClientePipe, SearchProductoPipe]
})
export class PipesModule {}

