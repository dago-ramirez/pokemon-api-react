import React from 'react'

export default function HeaderSerch({pokemon}) {
    return (
        <div className="columns is-mobile is-centered">
            <div className="column is-3">
                {/* <div className="level-left is-one-third">
                    <span className="tag is-large has-text-weight-bold">Buscar por nombre</span>
                </div> */}
                <div className="field has-addons level-right is-two-thirds">
                    <div className="control">
                        <input className="input" type="text" placeholder="Buscar por nombre"/>
                    </div>
                    <div className="control mb-3">
                        <a className="button is-info" href="/">
                            Buscar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
