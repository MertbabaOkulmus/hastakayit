ModalHelper = {};
ModalHelper.openModalFor = function(hastaId) {
  Session.set('selectedHastaId', hastaId);
  Modal.show('hastasModal');
}
