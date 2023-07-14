import React from 'react'
import {Card,CardBody } from 'reactstrap'

export default function Usercard({user}) {
  return (
    <div>
        <Card className='text-center mt-3 mb-4'>
            <img src={user.avatar_url} className="img-thumbnail"/>
            <CardBody>
            <div className='text-primary'>{user.name}</div>
            <div className='text-primary'>{user.bio}</div>
            <div className='text-primary'>{user.location}</div>
            <div className='text-primary'>Available for hire{user.hireable?'Yes':'Nope'}</div>
            <div className='text-primary'>{user.location}</div>
            <div className='text-primary'>{user.followers}</div>
            </CardBody>
            

            



        </Card>
    </div>
  )
}
