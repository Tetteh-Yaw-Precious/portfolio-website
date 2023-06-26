
'use client'
import React, { useEffect, useState } from 'react'
import { getProjects } from '@/sanity/sanity-utils';

const Post = async () => {
  const projects = await getProjects()
  console.log(projects)
  return (
    <div className='flex gap-6 border-4 border-black'>
      {/* {!projects ? (
        <option value=''>No property found</option>
      ) : projects?.map((project) => {
        return (
          <p key={project._id}>
            {project.name}
          </p>
        )
      })} */}
    </div>
  )
}

export default Post