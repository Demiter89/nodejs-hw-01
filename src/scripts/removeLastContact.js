import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        // Читаємо існуючі контакти з файлу
        const contacts = await readContacts();
        
        // Перевіряємо, чи є хоча б один контакт
        if (contacts.length > 0) {
            // Видаляємо останній контакт
            contacts.pop();
            // Записуємо оновлений масив назад у файл
            await writeContacts(contacts);
            console.log('Останній контакт був успішно видалений.');
        } else {
            console.log('Немає контактів для видалення.');
        }
    } catch (error) {
        console.error('Помилка при видаленні останнього контакту:', error.message);
    }
};

// Викликаємо функцію для тесту
removeLastContact();
