import React from 'react'
import Title from '../../pageTitle/Title'
import SinglePost from './singlePost'

function Posts() {
  return (
    <div>
        <Title />
        <section className="filter">
            <h2>Filter by muscle group:</h2>
            <select name="group" id="group">
                <option value="">Biceps</option>
                <option value="">Triceps</option>
                <option value="">Chest</option>
                <option value="">Back</option>
                <option value="">Legs</option>
            </select>
        </section>
        <section className="posts">
            <div className="container">
                <SinglePost />
            </div>
        </section>
    </div>
  )
}

export default Posts