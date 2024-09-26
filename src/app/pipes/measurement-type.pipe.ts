import { Pipe, PipeTransform } from '@angular/core';
import { MeasurementTypeEnum } from '../services/entity-management/entity-management.model';

@Pipe({
  name: 'measurementType',
  standalone: true,
})
export class MeasurementTypePipe implements PipeTransform {
  transform(value: MeasurementTypeEnum): string {
    switch (value) {
      case MeasurementTypeEnum.Unit:
        return 'ცალი';
      case MeasurementTypeEnum.Kg:
        return 'კგ';
      default:
        return '';
    }
  }
}
