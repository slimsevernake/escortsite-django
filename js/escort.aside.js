!function(t,e,i){"use strict";function s(i){this.$wrapper=t(i),this.$trigger=this.$wrapper.find(".escort-aside-trigger"),this.id=this.$trigger.data("escort-aside"),this.dialogType=this.$trigger.data("dialog-type"),this.display=this.$trigger.data("escort-aside-display"),this.$content=t("#escort-ajax-"+this.id),this.usesAjax=void 0!==this.$trigger.data("escort-ajax"),this.$document=t(e),this.$body=t("body"),this.setup()}t.extend(s,{instances:[]}),t.extend(s.prototype,{active:!1,usedAjax:!1,setup:function(){var t=this;t.ajax(),t.$trigger.on("click.aside",function(e){e.preventDefault(),t.active?t.hide():(t.dialogType?i.Escort.hideFull():t.$trigger.off("click.aside.ajax"),t.show())})},ajax:function(){var e=this;e.usesAjax&&void 0!==i.ajax&&e.$trigger.once("aside-ajax").each(function(){var s={};s.progress={type:"fullscreen"},s.url=t(this).attr("href"),s.event="click.aside.ajax",e.dialogType&&(s.dialogType=e.dialogType,s.dialog=t(this).data("dialog-options")),s.base=t(this).attr("id"),s.element=this,i.ajax(s)})},show:function(e){var i=this;i.active||(i.active=!0,i.usesAjax&&!i.usedAjax&&(i.$document.trigger("click.escort-aside"),i.usedAjax=!0),i.$wrapper.addClass("escort-active"),i.$content.addClass("escort-active"),setTimeout(function(){i.$document.on("click.escort-aside."+i.id,function(e){t(e.target).closest(".escort-aside-content").length||i.hide()}),i.$document.on("escort-region:show."+i.id+" escort-region:hide."+i.id,function(t,e){i.hide()})},10))},hide:function(t){var e=this;e.active&&(e.active=!1,e.$wrapper.removeClass("escort-active"),e.$content.removeClass("escort-active"),e.$document.off("click.escort-aside."+e.id),e.$document.off("escort-region:show."+e.id+" escort-region:hide."+e.id))}}),i.behaviors.escortAside={attach:function(e){var i=t(e).find(".escort-aside").once("escort-aside");if(i.length)for(var a=0;a<i.length;a++)s.instances.push(new s(i[a]));this.updateDestinations(e)},updateDestinations:function(e){function i(t,e,i){var s=new RegExp("([?&])"+e+"=.*?(&|$)","i");return t.match(s)?t.replace(s,"$1"+e+"="+i+"$2"):t}var s,a=drupalSettings.path.baseUrl+drupalSettings.path.currentPath;t(".escort-aside-content a").once("escort-aside-content").each(function(){s=t(this).attr("href"),s=i(s,"destination",a),t(this).attr("href",s)})}},i.EscortAsides=s}(jQuery,document,Drupal);