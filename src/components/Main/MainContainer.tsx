import React, { FC } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/reduxStore'
import Reader from './Main'

const ReaderContainer:FC<commonProps> = ({role, login}) => {
    return (
        <div>
            <Reader role={role} login={login}/>
        </div>
    )
}

const mapStateToProps = (state:RootState):mapState => {
    return {
        role: state.auth.role,
        login: state.auth.login
    }
}

export default connect<mapState, mapDispath, {}, RootState>(mapStateToProps, {})(ReaderContainer)

type mapState = {
    role: string
    login: string|null
}
type mapDispath = {}

type commonProps = mapState&mapDispath