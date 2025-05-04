import { readContacts } from "../utils/readContacts.js";

const getAllContacts = async () => {
    try {
        const contacts = await readContacts(); // Зчитуємо контакти з файлу
        console.log('Контакти:', contacts); // Виводимо їх на консоль
        return contacts; // Повертаємо масив контактів
    } catch (error) {
        console.error('Помилка при зчитуванні контактів:', error.message);
        return []; // Якщо сталася помилка, повертаємо порожній масив
    }
};

getAllContacts(); // Викликаємо функцію
