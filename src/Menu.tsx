import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

type MenuItemProps = {
  label: string,
  destination: string,
}

function MenuItem(props: MenuItemProps) {
    const location = useLocation();

    const onPage = [location.pathname, "/" + location.pathname].includes(props.destination);

    const div = (
        <div className={classNames(
            'menu-item',
            {'on-page': onPage},
        )}>
            {props.label}
        </div>
    );

    if (onPage) {
        return div;
    }

    return (
        <Link to={props.destination}>
            {div}
        </Link>
    );
}

type Props = {
}

type State = {
}

export default class Menu extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="col-12 col-md-3 col-lg-2 menu">
                <div className="fixture">
                    <MenuItem label={'Overview'} destination={'/'}/>
                    <MenuItem label={'Phonology'} destination={'/phonology'}/>
                    <MenuItem label={'Writing Systems'} destination={'/scripts'}/>
                    <MenuItem label={'Sourcing Roots'} destination={'/sourcing'}/>
                    <MenuItem label={'Root List'} destination={'/roots'}/>
                    <MenuItem label={'Dictionary'} destination={'/dictionary'}/>
                    <MenuItem label={'Texts'} destination={'/texts'}/>
                </div>
            </div>
        );
    }
}
