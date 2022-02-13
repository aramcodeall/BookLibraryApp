import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(value: string, asc: boolean, target: string): string {
        return value == target ? (asc ? "↓" : "↑") : "";
    }
}