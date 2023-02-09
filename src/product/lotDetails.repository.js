const LotDetails = require('./lotDetails');

class LotDetailRepository {

    constructor() {
        this.lotDetailList = new Map([
            ["MFT-000123-001", new LotDetails(
                {"lot_summary":{
                    "parent": {
                        "parent_name": {"key":"Protein Name", "value": "insulin", "type": "string",
                            "template_loc": {"down": 1, "right": 0, "value": "right"}},
                        "parent_corp_name": {"key":"Protein Num", "value": "MFT-000123", "type": "string",
                            "template_loc": {"down": 2, "right": 0, "value": "right"}}
                    },
                    "lot": {
                        "corp_name": {"key":"Protein Lot Num", "value": "MFT-000123-001", "type": "string",
                            "template_loc": {"down": 3, "right": 0, "value": "right"}},
                        "lot_produced_date": {"key":"Production Date", "value": "2022 Mar 03 05:12 PDT", "type": "date",
                            "template_loc": {"down": 4, "right": 0, "value": "right"}},
                        "lot_produced_by": {"key":"Produced By", "value": "john.mcneil", "type": "string",
                            "template_loc": {"down": 5, "right": 1, "value": "right"}},
                        "lot_purified_date": {"key":"Purification Date", "value": "2022 Mar 07 09:00 PDT", "type": "date",
                            "template_loc": {"down": 6, "right": 0, "value": "right"}},
                        "lot_purity":  {"key":"Purity (%)", "value": "92", "type": "percent",
                            "template_loc": {"down": 7, "right": 1, "value": "right"}},
                        "lot_amount_produced":  {"key":"Amount Produced (mg)", "value": "22", "type": "number",
                            "template_loc": {"down": 8, "right": 1, "value": "right"}},
                        "lot_eln_record":  {"key":"ELN Record", "value": "[Lot MFT-000123-001 Production Production](http://eln.com/eln12355)", "type": "url",
                            "template_loc": {"down": 9, "right": 0, "value": "right"}}
                    }
                    }
                }              
            )],
            ["MFT-000124-001", new LotDetails(
                {"lot_summary":{
                    "parent": {
                        "parent_name": {"key":"Protein Name", "value": "insulin", "type": "string",
                            "template_loc": {"down": 1, "right": 0, "value": "right"}},
                        "parent_corp_name": {"key":"Protein Num", "value": "MFT-000124", "type": "string",
                            "template_loc": {"down": 2, "right": 0, "value": "right"}}
                    },
                    "lot": {
                        "corp_name": {"key":"Protein Lot Num", "value": "MFT-000124-001", "type": "string",
                            "template_loc": {"down": 3, "right": 0, "value": "right"}},
                        "lot_produced_date": {"key":"Production Date", "value": "2022 Apr 08 05:12 PDT", "type": "date",
                            "template_loc": {"down": 4, "right": 0, "value": "right"}},
                        "lot_produced_by": {"key":"Produced By", "value": "john.mcneil", "type": "string",
                            "template_loc": {"down": 5, "right": 1, "value": "right"}},
                        "lot_purified_date": {"key":"Purification Date", "value": "2022 Apr 09 09:00 PDT", "type": "date",
                            "template_loc": {"down": 6, "right": 0, "value": "right"}},
                        "lot_purity":  {"key":"Purity (%)", "value": "94", "type": "percent",
                            "template_loc": {"down": 7, "right": 1, "value": "right"}},
                        "lot_amount_produced":  {"key":"Amount Produced (mg)", "value": "24", "type": "number",
                            "template_loc": {"down": 8, "right": 1, "value": "right"}},
                        "lot_eln_record":  {"key":"ELN Record", "value": "[Lot MFT-000124-001 Production Production](http://eln.com/eln124)", "type": "url",
                            "template_loc": {"down": 9, "right": 0, "value": "right"}}
                    }
                }   
                }           
            )]
        ]);
    }

    async fetchAll() {
        return [...this.lotDetailList.values()]
    }

    async getById(id) {
        return this.lotDetailList.get(id);
    }

    async create(product) {
        return this.lotDetailList.set(lotDetails.id, lotDetails)
    }
}

module.exports = LotDetailRepository;
