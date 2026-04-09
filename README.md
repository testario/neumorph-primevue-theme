# neumorph-form

Демо-проект на Vue 3 и PrimeVue 4, показывающий кастомную neumorphic-тему и набор UI-компонентов в едином визуальном стиле.

Проект представляет собой одну showcase-страницу с интерактивными элементами интерфейса и отдельной формой обратной связи, собранной по дизайн-макету из `Neumorph_form.pen`.

## Что внутри

- кастомный preset для PrimeVue 4 на базе `Aura`
- neumorphic-оформление через design tokens и CSS-overrides
- витрина компонентов: кнопки, поля ввода, селекты, чекбоксы, радио-кнопки, переключатели, слайдеры, рейтинг, таблица, карточки, панели, вкладки, уведомления, диалоги
- отдельный блок `Feedback Form — Design Faithful`, приближенный к макету
- моковые данные и локальное состояние без backend-части

## Стек

- Vue 3
- Vite
- PrimeVue 4
- Prime Icons
- Tailwind CSS 4
- PostCSS

## Быстрый старт

Требуется Node.js 18+.

```bash
npm ci
npm run dev
```

После запуска Vite откройте локальный адрес из консоли, обычно `http://localhost:5173`.

## Скрипты

```bash
npm run dev      # локальная разработка
npm run build    # production-сборка
npm run preview  # локальный просмотр production-сборки
```

## Структура проекта

```text
.
├── Neumorph_form.pen         # исходный дизайн-макет
├── index.html                # точка входа HTML, подключение шрифта Inter
├── src/
│   ├── App.vue               # корневой компонент
│   ├── main.js               # инициализация Vue и PrimeVue
│   ├── assets/
│   │   ├── app.css           # подключение Tailwind и кастомных стилей
│   │   └── neumorph.css      # глобальные neumorphic CSS-overrides
│   ├── pages/
│   │   └── ShowcasePage.vue  # основная витрина компонентов
│   └── theme/
│       └── neumorph.js       # PrimeVue preset с токенами темы
├── vite.config.js
└── postcss.config.js
```

## Как устроена тема

Визуальная часть разделена на два слоя:

- `src/theme/neumorph.js` задаёт design tokens PrimeVue: палитру, surface-цвета, radius, размеры и базовые настройки компонентов
- `src/assets/neumorph.css` усиливает стиль за счёт neumorphic-теней, состояний `hover`/`active`, кастомного оформления input-элементов, селектов, слайдеров и других компонентов

Это позволяет одновременно использовать штатную тему PrimeVue и тонко переопределять внешний вид там, где preset-уровня недостаточно.

## Что показывает showcase

Страница демонстрирует:

- палитру проекта
- варианты кнопок и состояний
- текстовые поля, `Password`, `InputNumber`, `Textarea`
- `Select`, `MultiSelect`, `AutoComplete`, `DatePicker`
- `Checkbox`, `RadioButton`, `ToggleSwitch`
- `Slider`, `Rating`, `Knob`
- `Tag`, `Chip`, `InputChips`, `ProgressBar`, `Badge`
- `DataTable`, `Card`, `Panel`, `Accordion`, `Tabs`
- `Message`, `Toast`, `Dialog`, `ConfirmDialog`
- финальную форму обратной связи в стиле исходного макета

## Ограничения текущей версии

- нет роутинга и многостраничной структуры
- нет сохранения данных и интеграции с API
- фильтрация таблицы заведена на состояние, но не реализована как полноценный поиск
- нет набора автоматических тестов

## Идеи для развития

- вынести showcase-блоки в отдельные компоненты
- добавить реальные сценарии валидации формы
- подключить backend или mock API для отправки обратной связи
- оформить тему как переиспользуемый пакет или набор токенов
