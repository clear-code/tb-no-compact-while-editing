/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (aGlobal) {

  var tbBug766495 = {
    init: function() {
      window.removeEventListener('load', this, false);
      window.addEventListener('unload', this, false);
      window.addEventListener('select', this, true);
    },
    destroy: function() {
      window.removeEventListener('unload', this, false);
      window.removeEventListener('select', this, true);
    },

    handleEvent: function(aEvent) {
      switch (aEvent.type) {
      case 'load':
        this.init();
        return;

      case 'unload':
        this.destroy();
        return;
      }
    }
  };
  window.addEventListener('load', tbBug766495, false);
  aGlobal.tbBug766495 = tbBug766495;
})(this);