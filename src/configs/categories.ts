export enum categoriesEnum {
  all = 'All',
  quick = 'Quick Task',
  urgent = 'Urgent',
  important = 'Important',
  business = 'Business',
  shop = 'Shop',
  family = 'Family',
}

export const categories = [
  categoriesEnum.urgent,
  categoriesEnum.quick,
  categoriesEnum.important,
  categoriesEnum.business,
  categoriesEnum.family,
  categoriesEnum.shop,
]

export const allCategories = [categoriesEnum.all, ...categories]
