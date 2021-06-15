// @flow
import * as React from 'react';
import { DangerPopup } from 'diginet-core-ui/components';

export default function DialogDelete(props)
{
  const { popupDelete, deleteTarget,closePopup } = props;
  const {id} = popupDelete;

  const comfirmDelete = () =>
  {
   
    deleteTarget(id);
    closePopup();
  }

  return <> <DangerPopup
    open={popupDelete.open}
    timing={3}
    fullScreen
    warningDescription={`Bạn Có Chắc Xóa Target ${id} Này`}
    onClose={closePopup}
    onCancel={comfirmDelete}
    onConfirm={comfirmDelete}
    pressESCToClose
  /></>
}
