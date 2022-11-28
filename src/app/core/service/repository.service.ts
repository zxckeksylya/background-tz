import { Injectable } from '@angular/core';
import { ControlTypes } from '../constants/control-types.constants';
import { JsonItem } from '../interfaces/json-item.interface';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private forms = [
    {
      id: 0,
      name: 'Анкета',
      json: {
        name: {
          label: 'Имя',
          controlType: ControlTypes.INPUT,
          required: true,
        } as JsonItem,
        age: {
          label: 'Возраст',
          controlType: ControlTypes.NUMBER,
          required: true,
        } as JsonItem,
        maritalStatus: {
          label: 'Семейное положение',
          controlType: ControlTypes.SELECT,
          required: true,
          choices: ['Не женат/не замужем', 'Женат/замужем'],
        } as JsonItem,
        university: {
          label: 'ВУЗ',
          controlType: ControlTypes.INPUT_GROUP,
          description: 'Укажите заведения, в которых вы учились.',
        } as JsonItem,
        placeOfBirth: {
          label: 'Место рождения',
          controlType: ControlTypes.SELECT,
          choices: [
            'Не важно',
            'Астрахань',
            'Волгоград',
            'Волжский',
            'Ростов-на-Дону',
            'Саратов',
            'Элиста',
          ],
        } as JsonItem,
        skills: {
          label: 'Навыки',
          controlType: ControlTypes.CHECKBOX_GROUP,
          choices: [
            'Общение',
            'Вождение',
            'Иностранные языки',
            'Программирование',
            'Бег с препятствиями',
            'Управление вертолетом',
            'Быстрое чтение',
            'Оперное пение',
            'Самозащита',
          ],
        } as JsonItem,
      },
    },
  ];

  private tableItems: any[] = [];

  private idCount = 100;

  public getFormById(id: number): any {
    return this.forms.find(x => x.id === id);
  }

  public getForms(): any {
    return this.forms;
  }

  public getTableItemById(id: number): any {
    return this.tableItems.find(x => x.id === id);
  }

  public getTableItems(): any {
    return this.tableItems;
  }

  public createTableItem(jsonID: number, itemValue: any): any {
    this.tableItems.push({ id: this.idCount, jsonID, itemValue });
    this.idCount++;
  }

  public updateTableItem(itemValue: any, id: number): any {
    this.tableItems.forEach(x => {
      if (x.id === id) {
        x.itemValue = itemValue;
      }
    });
  }
}
