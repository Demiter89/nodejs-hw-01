import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        // Записуємо порожній масив у файл, тим самим видаляючи всі контакти
        await writeContacts([]);
        console.log('Усі контакти були успішно видалені.');
    } catch (error) {
        console.error('Помилка при видаленні контактів:', error.message);
    }
};

// Викликаємо функцію для тесту
removeAllContacts();
