/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';
import { Plugin } from '@phuocng/rpv';

export interface RenderPrintProps {
    onClick: () => void;
}

export interface PrintProps {
    children?: (props: RenderPrintProps) => React.ReactElement;
}

export interface PrintPlugin extends Plugin {
    Print: (props: PrintProps) => React.ReactElement;
    PrintButton: () => React.ReactElement;
}

export default function printPlugin(): PrintPlugin;

export class PrintIcon extends React.Component<{}> {}
