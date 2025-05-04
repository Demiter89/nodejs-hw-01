import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (count = 5) => {
    const existingContacts = await readContacts();
    const newcontacts = Array.from({ length: count }, () => createFakeContact());
    const updatedContacts = [...existingContacts, ...newcontacts];
    await writeContacts(updatedContacts);
    console.log(`${count}контактів успішно згенеровано та додано.`);
};

generateContacts();