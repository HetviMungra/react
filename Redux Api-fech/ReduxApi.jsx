import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchApi } from '../src/features/ApiSlice'

export default function ReduxApi() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchApi())
    }, [])

    const record = useSelector((state) => {
        return state.apiKey
    })

    return (
        <div>
            <center><h1>ReduxApi</h1></center>
            <div className="pr_main">
                {
                    record.data &&
                    record.data.map((e, i) => {
                        return (
                        <div key={i} className='pr_div'>
                            <div className="pr_img">
                                <img src={e.image} alt="" />
                            </div>
                            <h2>{e.title}</h2>
                            <h3>$ {e.price}</h3>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
