import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from './firebase'

export interface ContactInquiry {
  nombre: string
  email: string
  telefono: string
  mensaje: string
}

export async function saveContactInquiry(data: ContactInquiry) {
  try {
    const docRef = await addDoc(collection(db, 'contactInquiries'), {
      ...data,
      estado: 'nuevo',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error saving contact inquiry:', error)
    throw error
  }
}
