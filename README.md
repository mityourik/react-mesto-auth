# Проектная работа: Mesto. Двенадцатый спринт

[Посмотреть мою работу](https://mityourik.github.io/react-mesto-auth/)

## Описание проекта

В данной проектной работе мы продолжили разработку проекта "Mesto", используя React. Проект представляет собой социальную сеть для публикации и обмена фотографиями. Мы научились создавать компоненты, работать с состоянием и эффектами, а также разрабатывать интерфейс с помощью JSX. В процессе работы над проектом мы освоили принципы компонентной архитектуры, обработку событий и взаимодействие с API.

В двенадцатом спринте были добавлены следующие функциональности и навыки:
- Роутинг и навигация по страницам приложения.
- Защищенные пути, которые доступны только авторизованным пользователям.
- Аутентификация и авторизация пользователей.
- Сохранение токена авторизации в локальном хранилище браузера.
- Удаление токена из локального хранилища при выходе пользователя со страницы.

## Содержание
- [Запуск проекта](#запуск-проекта)
- [Используемые технологии](#используемые-технологии)
- [Структура проекта](#структура-проекта)
- [Команда проекта](#команда-проекта)
- [Лицензия](#лицензия)

## Запуск проекта

Чтобы просмотреть проект на локальной машине, выполните следующие шаги:
1. Клонируйте репозиторий на локальную машину.
2. Перейдите в папку проекта в командной строке или терминале.
3. Установите необходимые зависимости с помощью команды `npm install`.
4. Запустите проект с помощью команды `npm run dev`.
5. Откройте веб-браузер и перейдите по соответствующему адресу `http://localhost:5173`.

Проект собран с использованием Vite.

## Используемые технологии

В данном проекте мы использовали следующие технологии:
- React
- JSX
- JavaScript (ES6)
- API запросы
- Vite (сборщик проекта)
- Git

## Структура проекта

В проекте используется компонентная структура, которая позволяет разделять функциональность на отдельные компоненты для удобного управления кодом. Вот основные компоненты и папки в проекте:
- `src` - папка, содержащая исходный код проекта.
  - `components` - папка с компонентами проекта.
    - `AddPlacePopup.jsx` - компонент окна попапа новой карточки.
    - `App.jsx` - главный компонент приложения.
    - `Card.jsx` - компонент для отображения карточки.
    - `ConfirmationPopup.jsx` - компонент для попапа подтверждения удаления.
    - `EditAvatarPopup.jsx` - компонент для попапа редактирования аватара.
    - `EditProfilePopup.jsx` - компонент для попапа редактирования профиля.
    - `Header.jsx` - компонент шапки страницы.
    - `Footer.jsx` - компонент подвала страницы.
    - `Main.jsx` - компонент основного контента страницы.
    - `PopupWithForm.jsx` - базовый компонент для попапов с формой.
    - `ImagePopup.jsx` - компонент для всплывающего окна с изображением.
    - `FormValidator.js` - класс для валидации форм
    - `DropdownMenu.jsx` - компонент выпадающего меню
    - `InfoTooltip.jsx` - компонент попапа с результатом ответа
    - `Login.jsx` - компонент страницы для входа
    - `ProtectedRoute.jsx` - компонент защищенного рута
    - `Register.jsx` - компонент страницы для аутентификации
  - `utils` - папка с вспомогательными функциями и данными.
    - `Api.js` - модуль для работы с API сервера.
    - `constants.js` - модуль с константами и настройками.
  - `images` - папка с изображениями для проекта.
  - `vendor` - папка с элементами сторонних разработчиков
  - `pages` - папка со страницей стилей index.css

## Команда проекта

Проект выполнен [Дмитрием Орловым](https://github.com/mityourik) в рамках обучения на курсе "Веб-разработка" в рамках
образовательной платформы "Яндекс Практикум"

## Лицензия

Проект распространяется без лицензии.
