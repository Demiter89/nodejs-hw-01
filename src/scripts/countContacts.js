import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        console.log(`Кількість контактів: ${contacts.length}`);
    } catch (error) {
        console.error('Помилка при зчитуванні контактів:', error.message);
    }
};

// Викликаємо функцію для тесту
countContacts();
