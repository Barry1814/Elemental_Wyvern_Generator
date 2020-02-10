var wide_statblock_template = '\
<div class="stat-block wide">\
  <hr class="orange-border" />\
  <div class="section-left">\
    <div class="creature-heading">\
      <h1>{{WYVERN_TYPE}} Wyvern</h1>\
      <h2>{{SIZE}} dragon, unaligned</h2>\
    </div> <!-- creature heading -->\
    <svg height="5" width="100%" class="tapered-rule">\
      <polyline points="0,0 400,2.5 0,5"></polyline>\
    </svg>\
    <div class="top-stats">\
      <div class="property-line first">\
        <h4>Armor Class</h4>\
        <p>{{ARMOR}}</p>\
      </div> <!-- property line -->\
      <div class="property-line">\
        <h4>Hit Points</h4>\
        <p>30</p>\
      </div> <!-- property line -->\
      <div class="property-line last">\
        <h4>Speed</h4>\
        <p>20ft., fly 80ft.</p>\
      </div> <!-- property line -->\
      <svg height="5" width="100%" class="tapered-rule">\
      <polyline points="0,0 400,2.5 0,5"></polyline>\
    </svg>\
      <div class="abilities">\
        <div class="ability-strength">\
          <h4>STR</h4>\
          <p>{{STR_SCORE}}</p>\
        </div> <!-- ability strength -->\
        <div class="ability-dexterity">\
          <h4>DEX</h4>\
          <p>{{DEX_SCORE}}</p>\
        </div> <!-- ability dexterity -->\
        <div class="ability-constitution">\
          <h4>CON</h4>\
          <p>{{CON_SCORE}}</p>\
        </div> <!-- ability constitution -->\
        <div class="ability-intelligence">\
          <h4>INT</h4>\
          <p>{{INT_SCORE}}</p>\
        </div> <!-- ability intelligence -->\
        <div class="ability-wisdom">\
          <h4>WIS</h4>\
          <p>{{WIS_SCORE}}</p>\
        </div> <!-- ability wisdom -->\
        <div class="ability-charisma">\
          <h4>CHA</h4>\
          <p>{{CHA_SCORE}}</p>\
        </div> <!-- ability charisma -->\
      </div> <!-- abilities -->\
      <svg height="5" width="100%" class="tapered-rule">\
      <polyline points="0,0 400,2.5 0,5"></polyline>\
    </svg>\
      <div class="property-line first">\
        <h4>Damage Immunities</h4>\
        <p>{{DAMAGE IMMUNITIES}}</p>\
      </div> <!-- property line -->\
      <div class="property-line">\
        <h4>Senses</h4>\
        <p>{{SENSES}}</p>\
      </div> <!-- property line -->\
      <div class="property-line">\
        <h4>Languages</h4>\
        <p>&mdash;{{LANGUAGES}}</p>\
      </div> <!-- property line -->\
    </div> <!-- top stats -->\
    <svg height="5" width="100%" class="tapered-rule">\
      <polyline points="0,0 400,2.5 0,5"></polyline>\
    </svg>\
    <div class="property-block">\
      <h4>Mutation Abilities</h4>\
      <p>{{MUTATION_ABILITIES}}</p>\
    </div> <!-- property block -->\
  </div> <!-- section left -->\
  <div class="section-right">\
    <div class="actions">\
      <h3>Actions</h3>\
      <div class="property-block">\
        <h4>Bite.</h4>\
        <p><i>Melee Weapon Attack:</i> +PROF + STR to hit, reach 10 ft., one creature.\
        <i>Hit:</i> (2d6 + STR) piercing damage.</p>\
      </div> <!-- property block -->\
      <div class="property-block">\
        <h4>Claws.</h4>\
        <p><i>Melee Weapon Attack:</i> +PROF + STR to hit, reach 5 ft., one creature.\
        <i>Hit:</i> (2d8 + STR) slashing damage.</p>\
      </div> <!-- property block -->\
      <div class="property-block">\
        <h4>{{SPECIAL_WEAPON}} (Recharge 5-6).</h4>\
        <p>{{BREATH_WEAPON_DESCRIPTION}}</p>\
      </div> <!-- property block -->\
    </div> <!-- actions -->\
  </div> <!-- section right -->\
  <hr class="orange-border bottom" />\
</div> <!-- stat block -->\
';
