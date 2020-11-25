const filmsList = [{name: 'Довод', launch: '2020', rating: '+16', genere: 'Детектив', isChecked: false}]

const render = (films) => {
  //TODO описать Добавление фильмов из арумента films внутрь tbody

  // films.map((film, key) => {
  //  for( key in film){
  //    TODO Делаем вставку данных в tbody
  //  }
  //})
}

const addData = (film) => {
  filmsList.push(film)
  render(filmsList)
}

const sort = () => {

}

const search = () => {

}

const check = () => {

}

const delete = () => {

}