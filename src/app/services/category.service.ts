import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList}from 'angularfire2/database'
import { Category } from '../model/category.model';

@Injectable()
export class CategoryService {
  categoryList:AngularFireList<any>;
  selectedCategory: Category =new Category();
  constructor(private firebase:AngularFireDatabase) {
   }

    getData()
  {
    this.categoryList=this.firebase.list('categories');
    return this.categoryList;
  }
  insertCategory(category : Category)
  {
          this.categoryList.push(
            {
              name:category.name,
              description:category.description
            }
          );
  }
  updateCategory(category : Category)
  {
          this.categoryList.update(category.$key,
            {
              name:category.name,
              description:category.description
            }
          );
  }
  deleteCategory(key:string)
  {
    console.log("key value ++"+key);
    this.categoryList.remove(key);
  }


}
