import { db } from "../firebase/firebase-config"
import { collection, query, getDocs } from "@firebase/firestore";

export const loadNotes = async(uid) => {
    
    const notesSnap = await getDocs(query(collection(db, `${ uid }/journal/notes`)));

    const notes = [];
 
    notesSnap.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
      });
 
      //console.log('notes',notes)
      return notes;
}