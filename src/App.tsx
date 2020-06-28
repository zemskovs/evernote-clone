import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import * as firebase from 'firebase'

type Note = firebase.firestore.DocumentData

const App: React.FC = () => {
  const [selectedNoteIndex, setSelectedNoteIndex] = React.useState(null)
  const [selectedNote, setSelectedNote] = React.useState(null)
  const [notes, setNotes] = React.useState<Note[]>([])

  console.log(notes)

  React.useEffect(() => {
    firebase.firestore().collection('notes').onSnapshot((update) => {
      const notes = update.docs.map(doc => {
        const data = doc.data()
        data.id = doc.id
        return data
      })
      setNotes(notes);
    })
  }, [])

  return <div>Hello Firebase</div>
}

export default hot(App)
