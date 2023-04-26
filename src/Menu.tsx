import React, { Component } from "react";
import { Link } from "react-router-dom";

type MenuItemProps = {
  label: string,
  destination: string,
}

function MenuItem(props: MenuItemProps) {
  return (
      <Link to={props.destination}>
        <div className='menu-item'>
          {props.label}
        </div>
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
    this.state = {
    };
  }


  render() {
    return (
      <div className="col-12 col-md-3 col-lg-2 menu">
        <MenuItem label={'Home'} destination={'/'}/>
        <MenuItem label={'Roots'} destination={'/roots'}/>
        <MenuItem label={'Dictionary'} destination={'/dictionary'}/>
        <MenuItem label={'Texts'} destination={'/texts'}/>
      </div>
    );
  }
}
