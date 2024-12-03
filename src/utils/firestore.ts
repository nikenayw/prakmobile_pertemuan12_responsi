import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// Fungsi untuk menambahkan balapan baru
export const addRace = async (race: { name: string; description: string; schedule: string; trackDetails: string }) => {
  try {
    const docRef = await addDoc(collection(db, 'races'), race);
    console.log('Balapan berhasil ditambahkan dengan ID: ', docRef.id);
  } catch (e) {
    console.error('Error menambahkan balapan: ', e);
  }
};

// Fungsi untuk mendapatkan daftar balapan
export const getRaces = async () => {
  const querySnapshot = await getDocs(collection(db, 'races'));
  const races = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return races;
};

// Fungsi untuk memperbarui detail balapan
export const updateRace = async (id: string, updatedData: { name?: string; description?: string; schedule?: string; trackDetails?: string }) => {
  const raceRef = doc(db, 'races', id);
  try {
    await updateDoc(raceRef, updatedData);
    console.log('Balapan berhasil diperbarui');
  } catch (e) {
    console.error('Error memperbarui balapan: ', e);
  }
};

// Fungsi untuk menghapus balapan
export const deleteRace = async (id: string) => {
  const raceRef = doc(db, 'races', id);
  try {
    await deleteDoc(raceRef);
    console.log('Balapan berhasil dihapus');
  } catch (e) {
    console.error('Error menghapus balapan: ', e);
  }
};
