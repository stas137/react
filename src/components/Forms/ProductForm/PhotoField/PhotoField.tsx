import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';

import { PlusOutlined } from '@ant-design/icons';
import { FormikHandlers } from 'formik/dist/types';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validations/validations';

import { ProductFormProps } from '../types';

const FILE_LIST_LENGTH = 8;

export type PhotoFieldProps = Pick<
  ProductFormProps,
  'className' | 'disabled' | 'autoFocusElement'
> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  // value: { uid: string; name: string; status: UploadFileStatus; url: string }[];
  value: UploadFile[];
  // onChange: FormikHandlers['handleChange'];
  onChange: (name: string, data: UploadFile[]) => void;
  onBlur: FormikHandlers['handleBlur'];
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const PhotoField = memo<PhotoFieldProps>(
  ({
    className,
    onChange,
    onBlur,
    touched,
    value,
    errors,
    disabled,
    submitCount,
  }: PhotoFieldProps) => {
    const { t } = useTranslation();

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const [fileList, setFileList] = useState<UploadFile[]>([...value]);

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    const handlePreview = async (file: UploadFile) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj as RcFile);
      }

      setPreviewImage(file.url || (file.preview as string));
      setPreviewOpen(true);
      setPreviewTitle(
        file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
      );
    };

    const handleChange: UploadProps['onChange'] = ({
      fileList: newFileList,
    }) => {
      setFileList(newFileList);
      onChange('photo', newFileList);
    };

    const beforeUpload = () => {
      return false;
    };

    const handleCancel = () => setPreviewOpen(false);

    return (
      <FormItem
        className={cn(className)}
        title={t(`forms.ProductForm.photo.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <>
          <Upload
            action="http://localhost:3000"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={beforeUpload}
            name="photo"
          >
            {fileList.length >= FILE_LIST_LENGTH ? null : uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="upload-image"
              style={{ width: '100%' }}
              src={previewImage}
            />
          </Modal>
        </>
      </FormItem>
    );
  }
);

PhotoField.displayName = 'PhotoField';
