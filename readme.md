## Серверная часть приложения "Список задач"
Для запуска
1. Клонировать репозиторий
2. Установить зависимости
    ```sh
    npm i
    ```
3. Создать базу данных PostgreSQL   
4. Создать файл .env и добавить туда
    ```sh
    PORT=<your_port>
    DB_NAME=<your_db_name>
    DB_USER=<your_db_user>
    DB_PORT=<your_db_port>
    DB_HOST=<your_db_host>
    DB_PASSWORD=<your_db_password>
    HASH_SALT=<3..7>
    SECRET_KEY=<very_secret_security_key>
    ```
5. Запустить
    ```sh
    npm run dev
    ```
