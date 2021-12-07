import * as wjGrid from '@grapecity/wijmo.grid';

export default class CustomMergeManager extends wjGrid.MergeManager {

    constructor(standardColumn = null, mergeColumns = []) {
        super();
        this.standardColumn = standardColumn;
        this.mergeColumns = [...mergeColumns];
    }
    
    getMergedRange(panel, r, c) {

        //
        // 기본 셀 범위 생성
        const rng = new wjGrid.CellRange(r, c);

        if (!this.standardColumn || !this.mergeColumns.includes(rng.col)) {
            return rng;
        }

        //
        // 왼쪽/오른쪽으로 확장
        // for (let i = rng.col; i < panel.columns.length - 1; i++) {
        //     if (panel.getCellData(rng.row, i, true) != panel.getCellData(rng.row, i + 1, true))
        //         break;
        //     rng.col2 = i + 1;
        // }
        // for (let i = rng.col; i > 0; i--) {
        //     if (panel.getCellData(rng.row, i, true) != panel.getCellData(rng.row, i - 1, true))
        //         break;
        //     rng.col = i - 1;
        // }


        //
        // 위/아래로 확장
        for (let i = rng.row; i < panel.rows.length - 1; i++) {
            if (panel.getCellData(i, this.standardColumn, true) != panel.getCellData(i + 1, this.standardColumn, false) || panel.getCellData(i, rng.col, true) != panel.getCellData(i + 1, rng.col, true))
                break;
            rng.row2 = i + 1;
        }
        for (let i = rng.row; i > 0; i--) {
            if (panel.getCellData(i, this.standardColumn, true) != panel.getCellData(i - 1, this.standardColumn, false) || panel.getCellData(i, rng.col, true) != panel.getCellData(i - 1, rng.col, true))
                break;
            rng.row = i - 1;
        }
        

        //
        // 마무리
        return rng;
    }
}