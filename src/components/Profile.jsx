import { useState } from "react"

const Profile = () => {

    const [profile, setProfile] = useState({name: '', age: '' })
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleSubmit = ()=>{
        event.preventDefault();
        // alert(`updated values: ${profile.name}, ${profile.age}`)
        setProfile({...profile, name: name, age: age})
        setName('')
        setAge('')
    }

    // - to clear input but persist on screen, we need to use localstorage. I dont have its knowledge yet

    return (
        <div style={{background: '#FFDE21 ', color:'#000', padding:20, borderRadius:18}}>
            <h1>Profile</h1>
            <br/>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={name} placeholder="new name?" onChange={(event) => setName(event.target.value)}  />
                    <br/>
                    <input type="text" value={age} placeholder="new age?" onChange={(event) => setAge(event.target.value)}  />
                </label>
                <br/>
                <button type="submit">update</button>
            </form>
        </div>
    )
}

export default Profile
