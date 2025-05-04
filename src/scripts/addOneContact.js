import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const addOneContact = async () => {
    try {
        const existingContacts = await readContacts(); // Зчитуємо існуючі контакти
        const newContact = createFakeContact(); // Створюємо новий контакт
        const updatedContacts = [...existingContacts, newContact]; // Додаємо новий контакт до існуючих
        
        await writeContacts(updatedContacts); // Оновлюємо файл з новими контактами
        console.log('Один контакт успішно додано.');
    } catch (error) {
        console.error('Помилка при додаванні контакту:', error.message);
    }
};

addOneContact(); // Викликаємо функцію
