import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';

import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Entities" id="entity-menu" data-cy="entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <>{/* to avoid warnings when empty */}</>
    <MenuItem icon="asterisk" to="/brand">
      Brand
    </MenuItem>
    <MenuItem icon="asterisk" to="/company">
      Company
    </MenuItem>
    <MenuItem icon="asterisk" to="/generics">
      Generics
    </MenuItem>
    <MenuItem icon="asterisk" to="/ingredients">
      Ingredients
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);