# Шаблон для SCSS-вёрстки

Шаблон для вёрстки с использованием SCSS-препроцессора на основе статей [Организация кода для CSS-препроцессоров](https://canonium.com/articles/organizing-code-in-project) и [Приятная сборка frontend проекта](https://habrahabr.ru/post/250569/). Для ускрения развёртывания в проект включена папка node_modules.

## Использованное ПО

NPM, Libsass, Normalize.css, Gulp и множество утилит для него.

## Исходники проекта

* src/
  * html/
  * img/
  * styles/

### html/

* index.html

### styles/

* **normalize/** _нормализация стилей_
  * _normalize.css
* **test_category/** 
  * _test.scss
* **styles.less** _точка входа для всех стилей_

## Компиляция файлов проекта

src | build
--- | ---
src/html/ | build/
src/img/ | build/img/
src/styles/styles.scss | build/css/styles.css

## Установка и сборка проекта

Необходимо установить последние версии [NodeJS](https://nodejs.org/en/download/) и [Gulp](http://gulpjs.com/). Для вёрстки и тестирования сайта, в консоли перейти в папку проекта и ввести команду **gulp**.

Очистить папку с собранным проектом можно командой **gulp clean**.