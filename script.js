// Sample medicine data - you can replace this with your actual medicine database
const medicines = [
  
  {
    "id": 1,
    "name": "ABDAL",
    "composition": "Aceclofenac 100 mg Tab",
    "mrp": 900.0,
    "description": "20 X 10 ST",
    "brand": "Madhav Labs",
    "image": "images/ABDAL.jpg"
  },
  {
    "id": 2,
    "name": "ABDAL PLUS",
    "composition": "Aceclofenac 100 mg, Paracetamol 325 mg Tab (BLISTER)",
    "mrp": 1000.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL_PLUS.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 3,
    "name": "ABDAL PLUS",
    "composition": "Aceclofenac 100 mg, Paracetamol 325 mg Tab (ALU ALU)",
    "mrp": 690.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL_PLUS_2.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 4,
    "name": "ABDAL - CZ",
    "composition": "Aceclofenac 100 mg, Paracetamol 325 mg, Chloroxazone 250 mg Tab (Blister)",
    "mrp": 790.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL_-_CZ.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 5,
    "name": "ABDAL - CZ",
    "composition": "Aceclofenac 100 mg, Paracetamol 325mg, Chloroxazone 250 mg Tab(Alu Alu)",
    "mrp": 890.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL_-_CZ_2.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 6,
    "name": "ABDAL CZ-500",
    "composition": "Aceclofenac 100 mg, Paracetamol 325 mg, Chloroxazone 500 mg Tab",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL_CZ-500.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 7,
    "name": "ABDAL - SP",
    "composition": "Aceclofenac 100 mg Paracetamol 325 mg, Serratiopeptidase 10 mg Tab",
    "mrp": 850.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL_-_SP.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 8,
    "name": "ABDAL - SP",
    "composition": "Aceclofenac 100 mg Paracetamol 325 mg, Serratiopeptidase 10 mg Tab (New attactive pack with barcode)",
    "mrp": 900.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL_-_SP_2.jpg",
    "description": "10 X 10 BL With barcode"
  },
  {
    "id": 9,
    "name": "ABDAL - SP 15",
    "composition": "Aceclofenac 100 mg Paracetamol 325 mg, Serratiopeptidase 15 mg Tab",
    "mrp": 950.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL_-_SP_15.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 10,
    "name": "ABDAL-RZ",
    "composition": "Aceclofenac 200 mg (SR), Rabeprazole 20 mg (EC) Caps",
    "mrp": 1000.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL-RZ.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 11,
    "name": "ABDAL-TS4",
    "composition": "Aceclofenac 100 mg, Thiocolchicoside 4 mg Tab",
    "mrp": 1900.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL-TS4.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 12,
    "name": "ABDAL-TSP4",
    "composition": "Aceclofenac 100mg, Paracetamol 325 mg, Thiocolchicoside 4 mg Tabs",
    "mrp": 1990.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL-TSP4.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 13,
    "name": "ADLOR +",
    "composition": "Lornoxicam 8 mg, Paracetamol 325 mg Tab",
    "mrp": 1000.0,
    "brand": "Madhav Labs",
    "image": "images/ADLOR_+.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 14,
    "name": "AZVIG -100 DT",
    "composition": "Azithromycin 100 mg Dispersible Tab",
    "mrp": 790.0,
    "brand": "Madhav Labs",
    "image": "images/AZVIG_-100_DT.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 15,
    "name": "AZVIG - 250",
    "composition": "Azithromycin 250 mg Tab (Dpco )",
    "mrp": 1565.6,
    "brand": "Madhav Labs",
    "image": "images/AZVIG_-_250.jpg",
    "description": "20 X 6 BL"
  },
  {
    "id": 16,
    "name": "AZVIG - 250 LB",
    "composition": "Azithromycin 250 mg with Lactic Acid Bacillus 2.5 Billion Spores Tabs",
    "mrp": 1350.0,
    "brand": "Madhav Labs",
    "image": "images/AZVIG_-_250_LB.jpg",
    "description": "15 X 6 BL"
  },
  {
    "id": 17,
    "name": "AZVIG - 500",
    "composition": "Azithromycin 500 mg Tab  (Dpco)",
    "mrp": 2382.3,
    "brand": "Madhav Labs",
    "image": "images/AZVIG_-_500.jpg",
    "description": "3 X 6 X 5 BL"
  },
  {
    "id": 18,
    "name": "AZVIG - 500 LB",
    "composition": "Azithromycin 500 mg with Lactic Acid Bacillus 2.5 Billion Spores Tabs",
    "mrp": 2610.0,
    "brand": "Madhav Labs",
    "image": "images/AZVIG_-_500_LB.jpg",
    "description": "3 X 6 X 5 BL"
  },
  {
    "id": 19,
    "name": "BAT-250",
    "composition": "Levofloxacin 250 mg Tab (Dpco)",
    "mrp": 533.0,
    "brand": "Madhav Labs",
    "image": "images/BAT-250.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 20,
    "name": "BAT-500",
    "composition": "Levofloxacin 500 mg Tab (Dpco)",
    "mrp": 1024.8,
    "brand": "Madhav Labs",
    "image": "images/BAT-500.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 21,
    "name": "BEFOL 100",
    "composition": "Carbonyl iron, Folic Acid, Vitamin B12 and Zinc Caps",
    "mrp": 900.0,
    "brand": "Madhav Labs",
    "image": "images/BEFOL_100.jpg",
    "description": "5 X 2 X 15 BL"
  },
  {
    "id": 22,
    "name": "BETAVIG-8",
    "composition": "Betahistine 8 mg Tabs",
    "mrp": 600.0,
    "brand": "Madhav Labs",
    "image": "images/BETAVIG-8.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 23,
    "name": "BAKEM- 20",
    "composition": "Baclofen 20 mg Tabs  (Dpco)",
    "mrp": 1709.4,
    "brand": "Madhav Labs",
    "image": "images/BAKEM-_20.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 24,
    "name": "BLAST",
    "composition": "Bromhexin hydrochloride IP 8 mg, Guaiphensin ip 50 mg, Phenylepherine hydrochloride 5 mg, Cpm 2 mg, Paracetamol 325 mg Tab",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/BLAST.jpg",
    "description": "20 X 10 ST"
  },
  {
    "id": 25,
    "name": "BONVIG K2-7",
    "composition": "Calcitriol 0.25 mcg, Calcium Citrate Maleate 500mg, Vitamin K2-7 45 mcg, Methylcobalamin 1500 mcg, Zinc 7.5 mg, Magnesium 20 mg, L -Methyl Folate 800 mcg Soft Gel Caps",
    "mrp": 1900.0,
    "brand": "Madhav Labs",
    "image": "images/BONVIG_K2-7.jpg",
    "description": "10 X 1 X 10 BL"
  },
  {
    "id": 26,
    "name": "CALSPAN-500",
    "composition": "Oyster Calcium , Vitamin D3 250 IU, Carbonate 1250 mg, Elemental Calcium 500 mg Tab",
    "mrp": 590.0,
    "brand": "Madhav Labs",
    "image": "images/CALSPAN-500.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 27,
    "name": "CALSPAN-DBL",
    "composition": "Calcium Dobesilate 500 mg Capsules",
    "mrp": 1690.0,
    "brand": "Madhav Labs",
    "image": "images/CALSPAN-DBL.jpg",
    "description": "10 X 1 X 10 AA"
  },
  {
    "id": 28,
    "name": "CALSPAN - M",
    "composition": "Calcium, Vitamin D3 with Minerals Tab",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/CALSPAN_-_M.jpg",
    "description": "5 X 2 X 15 BL"
  },
  {
    "id": 29,
    "name": "CALSPAN- MOM",
    "composition": "Calcium Citrate Maleate 250mg, Vitamin D3 100 IU, Folic acid 50 mcg Tabs",
    "mrp": 810.0,
    "brand": "Madhav Labs",
    "image": "images/CALSPAN-_MOM.jpg",
    "description": "3 X 1 X 30 Bott pack"
  },
  {
    "id": 30,
    "name": "CALSPAN PLUS",
    "composition": "Cyanocobalamin 1 mcg, calcium carbonate 500 mg, vitamin D3 200 IU , Folic acid 200 mcg, Pyridoxine HCL 2mg Softgel caps",
    "mrp": 1700.0,
    "brand": "Madhav Labs",
    "image": "images/CALSPAN_PLUS.jpg",
    "description": "10  X 1 X  10 BL"
  },
  {
    "id": 31,
    "name": "CALSPAN -MFD3",
    "composition": "Calcium carbonate 1250mg , Vitamin D3 2000IU , Magnjesium 240 mg , Zinc 11mg, Methylcobalamin 1500 mcg, L-methylfolate calcium 1 mg and Pyridoxal 5 Phosphate 20 mg Tab \n",
    "mrp": 1900.0,
    "brand": "Madhav Labs",
    "image": "images/CALSPAN_-MFD3.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 32,
    "name": "CALSPAN -CT",
    "composition": "Calcium carbonate 1250 mg Eq .to Elemental calcium 500 mg , Calcitrol 0.25 mcg",
    "mrp": 2550.0,
    "brand": "Madhav Labs",
    "image": "images/CALSPAN_-CT.jpg",
    "description": "10 X 15 BL"
  },
  {
    "id": 33,
    "name": "CCM -V3",
    "composition": "Clindamycin Phosphate 100 mg , Clotrimazole 200 mg soft gel caps",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/CCM_-V3.jpg",
    "description": "10 X 1 X 3 BL"
  },
  {
    "id": 34,
    "name": "CANVIG-100",
    "composition": "Itraconazole 100 mg Caps",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/CANVIG-100.jpg",
    "description": "10 X 1 X 7 BL"
  },
  {
    "id": 35,
    "name": "COVIG Q",
    "composition": "Coenzyme Q 10 100 mg (Softgel caps)",
    "mrp": 4900.0,
    "brand": "Madhav Labs",
    "image": "images/COVIG_Q.jpg",
    "description": "10 X 1 X 10 BL"
  },
  {
    "id": 36,
    "name": "CEFVIG-100 DT",
    "composition": "Cefpodoxime Proxetil 100 mg Dispersible Tab",
    "mrp": 1500.0,
    "brand": "Madhav Labs",
    "image": "images/CEFVIG-100_DT.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 37,
    "name": "CEFVIG-200 DT",
    "composition": "Cefpodoxime Proxetil 200 mg Dispersible Tab",
    "mrp": 2400.0,
    "brand": "Madhav Labs",
    "image": "images/CEFVIG-200_DT.jpg",
    "description": "10 X 1 X 10AA"
  },
  {
    "id": 38,
    "name": "CEFVIG- OF",
    "composition": "Cefpodoxime Proxetil 200 mg, Ofloxacin 200 mg Tab",
    "mrp": 1300.0,
    "brand": "Madhav Labs",
    "image": "images/CEFVIG-_OF.jpg",
    "description": "5 X 10 AA"
  },
  {
    "id": 39,
    "name": "CEFVIG CL 325",
    "composition": "Cefpodoxime Proxetil 200 mg, Clavulanate Potassium 125 mg Tab",
    "mrp": 2160.0,
    "brand": "Madhav Labs",
    "image": "images/CEFVIG_CL_325.jpg",
    "description": "10 X 6 ST"
  },
  {
    "id": 40,
    "name": "DJ-5",
    "composition": "Desloratadine 5 mg Tabs",
    "mrp": 900.0,
    "brand": "Madhav Labs",
    "image": "images/DJ-5.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 41,
    "name": "DJMN",
    "composition": "Desloratadine 5 mg, Montelukast 10 mg Tabs",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/DJMN.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 42,
    "name": "D-TUSS",
    "composition": "Dextromethorphan hydrobromide10 mg, Chloropheniramine maleate 2 mg, Phenylephrine Hydrochloride 5mg Softgel Caps",
    "mrp": 600.0,
    "brand": "Madhav Labs",
    "image": "images/D-TUSS.jpg",
    "description": "10 X 1 X 10 BL"
  },
  {
    "id": 43,
    "name": "DNVIG-510",
    "composition": "Naproxen 500 mg, Domperidone 10 mg Tabs",
    "mrp": 2250.0,
    "brand": "Madhav Labs",
    "image": "images/DNVIG-510.jpg",
    "description": "10 X 15 ST"
  },
  {
    "id": 44,
    "name": "DOLODIL TAB",
    "composition": "Piroxicam 20 mg DispersibleTab",
    "mrp": 780.0,
    "brand": "Madhav Labs",
    "image": "images/DOLODIL_TAB.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 45,
    "name": "DSQ-CA",
    "composition": "Aceclofenac 100 mg, Paracetamol 325 mg, Cetirizine Dihydrochloride 10 mg, Phenylephrine Hydrochloride 5mg, Caffeine (Anhydrous) 25 mg Tabs",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/DSQ-CA.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 46,
    "name": "DRAT - MF",
    "composition": "Drotavarine 80 mg, Mefenamic acid 250 mg Tab",
    "mrp": 890.0,
    "brand": "Madhav Labs",
    "image": "images/DRAT_-_MF.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 47,
    "name": "EBAVIG -10",
    "composition": "Ebastine 10 mg Tabs",
    "mrp": 890.0,
    "brand": "Madhav Labs",
    "image": "images/EBAVIG_-10.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 48,
    "name": "EBEX - 400 PLUS",
    "composition": "Albendazole 400 mg, Ivermectin 6 mg Tab",
    "mrp": 1440.0,
    "brand": "Madhav Labs",
    "image": "images/EBEX_-_400_PLUS.jpg",
    "description": "20 X 3 BL"
  },
  {
    "id": 49,
    "name": "EMDOX – LB",
    "composition": "Doxycycline 100 mg, Lactic Acid Bacillus spores Caps",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/EMDOX_–_LB.jpg",
    "description": "10  X 10 AA"
  },
  {
    "id": 50,
    "name": "EMROX - 150",
    "composition": "Roxithromycin 150 mg Tab",
    "mrp": 1600.0,
    "brand": "Madhav Labs",
    "image": "images/EMROX_-_150.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 51,
    "name": "EMTAX-100 DT",
    "composition": "Cefixime 100 mg DispersibleTab",
    "mrp": 890.0,
    "brand": "Madhav Labs",
    "image": "images/EMTAX-100_DT.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 52,
    "name": "EMTAX-200 DT",
    "composition": "Cefixime 200 mg DispersibleTab  (Dpco)",
    "mrp": 1095.3,
    "brand": "Madhav Labs",
    "image": "images/EMTAX-200_DT.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 53,
    "name": "EMTAX- 200 LB",
    "composition": "Cefixime 200 mg, Lactic Acid Bacillus 60 Million spores Tab",
    "mrp": 1600.0,
    "brand": "Madhav Labs",
    "image": "images/EMTAX-_200_LB.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 54,
    "name": "EMTAX-200 DT LB",
    "composition": "Cefixime 200 mg Lactic Acid Bacillus 60 mg DispersibleTab",
    "mrp": 1600.0,
    "brand": "Madhav Labs",
    "image": "images/EMTAX-200_DT_LB.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 55,
    "name": "EMTAX-AZL",
    "composition": "Cefixime 200 mg, Azithromycin 250, Lactic acid Bacillus 60 million spores Tabs",
    "mrp": 2990.0,
    "brand": "Madhav Labs",
    "image": "images/EMTAX-AZL.jpg",
    "description": "10 X  10 AA"
  },
  {
    "id": 56,
    "name": "EMTAX - OF",
    "composition": "Cefixime 200 mg, Ofloxacin 200 mgTab",
    "mrp": 2000.0,
    "brand": "Madhav Labs",
    "image": "images/EMTAX_-_OF.jpg",
    "description": "10  X 10 AA"
  },
  {
    "id": 57,
    "name": "EMTAX - CL 325",
    "composition": "Cefixime 200 mg, Clavulanate Potassium 125 mg Tab",
    "mrp": 2160.0,
    "brand": "Madhav Labs",
    "image": "images/EMTAX_-_CL_325.jpg",
    "description": "10 X 6 ST"
  },
  {
    "id": 58,
    "name": "EMZOLID-600",
    "composition": "Linezolid 600 mg Tab (Dpco)",
    "mrp": 2438.6,
    "brand": "Madhav Labs",
    "image": "images/EMZOLID-600.jpg",
    "description": "10 X 1 X 6 AA"
  },
  {
    "id": 59,
    "name": "EN-M",
    "composition": "Pantoprazole 40 mg Tab",
    "mrp": 1050.0,
    "brand": "Madhav Labs",
    "image": "images/EN-M.jpg",
    "description": "10 X 15 AA"
  },
  {
    "id": 60,
    "name": "EN-M",
    "composition": "Pantoprazole 40 mg Tab",
    "mrp": 1350.0,
    "brand": "Madhav Labs",
    "image": "images/EN-M_2.jpg",
    "description": "10 X 15 AA Aristro pack"
  },
  {
    "id": 61,
    "name": "EN-D",
    "composition": "Pantoprazole 20 mg, Domperidone 10 mg Tab",
    "mrp": 790.0,
    "brand": "Madhav Labs",
    "image": "images/EN-D.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 62,
    "name": "EN-D",
    "composition": "Pantoprazole 20 mg, Domperidone 10 mg Tab",
    "mrp": 1425.0,
    "brand": "Madhav Labs",
    "image": "images/EN-D_2.jpg",
    "description": "10 X 15 AA (Numbering base foil)"
  },
  {
    "id": 63,
    "name": "EN-DSR",
    "composition": "Pantoprazole 40 mg, Domperidone 30 mg SR Caps (STRIP)",
    "mrp": 1050.0,
    "brand": "Madhav Labs",
    "image": "images/EN-DSR.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 64,
    "name": "EN-DSR",
    "composition": "Pantoprazole 40 mg, Domperidone 30 mg SR Caps (ALU - ALU)",
    "mrp": 1100.0,
    "brand": "Madhav Labs",
    "image": "images/EN-DSR_2.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 65,
    "name": "EN-DSR",
    "composition": "Pantoprazole 40 mg, Domperidone 30 mg SR Caps (ALU - ALU)",
    "mrp": 1950.0,
    "brand": "Madhav Labs",
    "image": "images/EN-DSR_3.jpg",
    "description": "10 X 15 AA Alkem pack"
  },
  {
    "id": 66,
    "name": "EN-M LP",
    "composition": "Pantoprazole 40 mg, Levosulpride-75 mg SR Caps",
    "mrp": 1900.0,
    "brand": "Madhav Labs",
    "image": "images/EN-M_LP.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 67,
    "name": "EZEM-O3",
    "composition": "Natural vitamin E 400 IU, Omega 3 fatty acid 30 mg, Wheat Germ Oil 100 mg Soft Gel Caps",
    "mrp": 1530.0,
    "brand": "Madhav Labs",
    "image": "images/EZEM-O3.jpg",
    "description": "3 X 3 X 10 BL"
  },
  {
    "id": 68,
    "name": "FEP - 650",
    "composition": "Paracetamol 650 mg Tab (Dpco)",
    "mrp": 335.0,
    "brand": "Madhav Labs",
    "image": "images/FEP_-_650.jpg",
    "description": "10 X 15 BL"
  },
  {
    "id": 69,
    "name": "FEP 650 -PLUS",
    "composition": "Paracetamol 650 Mg , Phenylephrine Hydrochloride 5 Mg , Chlorpheniramine Maleate 2mg , Caffine 25mg Tab",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/FEP_650_-PLUS.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 70,
    "name": "FTOL - 12",
    "composition": "Folic Acid 5 mg, Vit.B12 15 mcg Tab",
    "mrp": 300.0,
    "brand": "Madhav Labs",
    "image": "images/FTOL_-_12.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 71,
    "name": "FTOL-SG",
    "composition": "Folic acid 5 mg, DHA 200 mg, Vit. B12 1 mcg soft gel caps",
    "mrp": 1150.0,
    "brand": "Madhav Labs",
    "image": "images/FTOL-SG.jpg",
    "description": "10 X 1 X 10 BL"
  },
  {
    "id": 72,
    "name": "4G PLUS",
    "composition": "Omega-3 fatty Acids 90 mg, Green Tea Extract 10 mg, Ginkgo biloba 10 mg, Ginseng 42.5 mg, Grape seed extract, Antioxidants, Vitamins, Minerals , Trace Elements Softgel Caps",
    "mrp": 1900.0,
    "brand": "Madhav Labs",
    "image": "images/4G_PLUS.jpg",
    "description": "10 X 1 X 10 BL"
  },
  {
    "id": 73,
    "name": "GEFPLUS",
    "composition": "Mefanamic Acid 250 mg, Paracetamol 325 mg Tab",
    "mrp": 900.0,
    "brand": "Madhav Labs",
    "image": "images/GEFPLUS.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 74,
    "name": "GEFSPAS",
    "composition": "Mefanamic Acid 250 mg, Dicyclomine HCL 10 mg Tab",
    "mrp": 900.0,
    "brand": "Madhav Labs",
    "image": "images/GEFSPAS.jpg",
    "description": "5 X 4 X 10 BL"
  },
  {
    "id": 75,
    "name": "GEXIN – 250 DT",
    "composition": "Cephalexin 250 mg DispersibleTab",
    "mrp": 1400.0,
    "brand": "Madhav Labs",
    "image": "images/GEXIN_–_250_DT.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 76,
    "name": "GEXIN – 500",
    "composition": "Cephalexin 500 mg Caps",
    "mrp": 2400.0,
    "brand": "Madhav Labs",
    "image": "images/GEXIN_–_500.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 77,
    "name": "GM- 17",
    "composition": "Ginseng 42.5 mg , Multivitamin & Multiminerals Softgel Caps",
    "mrp": 950.0,
    "brand": "Madhav Labs",
    "image": "images/GM-_17.jpg",
    "description": "10 X 1 X 10 BL"
  },
  {
    "id": 78,
    "name": "H CLOX-500",
    "composition": "Ampicillin 250mg, Dicloxacillin 250mg Caps",
    "mrp": 1400.0,
    "brand": "Madhav Labs",
    "image": "images/H_CLOX-500.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 79,
    "name": "HYZOK PLUS",
    "composition": "Nimesulide 100 mg, Chloroxazone 250mg Tab",
    "mrp": 1800.0,
    "brand": "Madhav Labs",
    "image": "images/HYZOK_PLUS.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 80,
    "name": "IBM-D3",
    "composition": "Benfotiamine 150 mg, Inositol 100 mg, Methylcobalamin 1500 mcg, Vitamin D3 2000 IU, Alpha Lipoic acid 100 mg, Chromium Chloride 200 mcg, Sodium                selenite 55 mcg, Folic acid 1.5 mg Tabs",
    "mrp": 1620.0,
    "brand": "Madhav Labs",
    "image": "images/IBM-D3.jpg",
    "description": "6 X 1 X 10 AA"
  },
  {
    "id": 81,
    "name": "KLIME –250",
    "composition": "Cefuroxime Axetil 250 mg Tabs",
    "mrp": 2800.0,
    "brand": "Madhav Labs",
    "image": "images/KLIME_–250.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 82,
    "name": "KLIME –500",
    "composition": "Cefuroxime Axetil 500 mg Tab",
    "mrp": 2880.0,
    "brand": "Madhav Labs",
    "image": "images/KLIME_–500.jpg",
    "description": "5 X 10 AA"
  },
  {
    "id": 83,
    "name": "KLIME CL - 375",
    "composition": "Cefuroxime Axetil 250 mg, Clavulanate Potassium 125 mg Tab",
    "mrp": 2980.0,
    "brand": "Madhav Labs",
    "image": "images/KLIME_CL_-_375.jpg",
    "description": "10 X 6 ST"
  },
  {
    "id": 84,
    "name": "LAK-M DT",
    "composition": "Lactic Acid Bacillus 100 Million Spores Tab",
    "mrp": 400.0,
    "brand": "Madhav Labs",
    "image": "images/LAK-M_DT.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 85,
    "name": "LYCET - 5",
    "composition": "Levocetirizine 5 mg Tab",
    "mrp": 390.0,
    "brand": "Madhav Labs",
    "image": "images/LYCET_-_5.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 86,
    "name": "LYCET - SG",
    "composition": "Levocetirizine 5 mg Soft gel caps",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/LYCET_-_SG.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 87,
    "name": "LYCET - MN KID",
    "composition": "Levocetirizine 2.5 mg, Montelukast 4 mg Tab",
    "mrp": 650.0,
    "brand": "Madhav Labs",
    "image": "images/LYCET_-_MN_KID.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 88,
    "name": "LYCET - MN",
    "composition": "Levocetirizine 5 mg, Montelukast 10 mg Tab",
    "mrp": 1100.0,
    "brand": "Madhav Labs",
    "image": "images/LYCET_-_MN.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 89,
    "name": "LYCET - MN",
    "composition": "Levocetirizine 5 mg, Montelukast 10 mg Tab",
    "mrp": 2100.0,
    "brand": "Madhav Labs",
    "image": "images/LYCET_-_MN_2.jpg",
    "description": "10 X 1 X 15 AA Aristo pack"
  },
  {
    "id": 90,
    "name": "LYCET-SG MN",
    "composition": "Levocetirizine 5 mg, Montelukast 10 mg Soft gel caps",
    "mrp": 1400.0,
    "brand": "Madhav Labs",
    "image": "images/LYCET-SG_MN.jpg",
    "description": "10 X 1 X 10 BL"
  },
  {
    "id": 91,
    "name": "LYCET-MNB",
    "composition": "Levocetirizine 5 m, Montelukast 10 mg, Ambroxol 75 mg Tab",
    "mrp": 1400.0,
    "brand": "Madhav Labs",
    "image": "images/LYCET-MNB.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 92,
    "name": "LYCET-XL +",
    "composition": "Ambroxol 60 mg, Paracetamol 325 mg, Phenylephrine 5mg, Cetirizine 5mg Tabs",
    "mrp": 690.0,
    "brand": "Madhav Labs",
    "image": "images/LYCET-XL_+.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 93,
    "name": "M RAL FORTE",
    "composition": "Trypsin Chymotrypsin (100000AU) Tabs",
    "mrp": 3800.0,
    "brand": "Madhav Labs",
    "image": "images/M_RAL_FORTE.jpg",
    "description": "10 X 20 BL"
  },
  {
    "id": 94,
    "name": "MAYO- 60K S",
    "composition": "Cholecalciferol 60K IU Softgel Cap",
    "mrp": 2000.0,
    "brand": "Madhav Labs",
    "image": "images/MAYO-_60K_S.jpg",
    "description": "20 X 1 X 4 BL"
  },
  {
    "id": 95,
    "name": "M-CIT",
    "composition": "Cetirizine 10 mg Tab (Dpco)",
    "mrp": 421.0,
    "brand": "Madhav Labs",
    "image": "images/M-CIT.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 96,
    "name": "MDPF",
    "composition": "Doxylamine Succinate 10 mg, Pyridoxine10 mg, Folic Acid 2.5 mg Tab",
    "mrp": 500.0,
    "brand": "Madhav Labs",
    "image": "images/MDPF.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 97,
    "name": "MDZ-6",
    "composition": "Deflazacort 6 mg Tab",
    "mrp": 1500.0,
    "brand": "Madhav Labs",
    "image": "images/MDZ-6.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 98,
    "name": "ME-D3",
    "composition": "Magnesium Glycine complex 250 mg \nVitamin D3 IP 1000 IU",
    "mrp": 2300.0,
    "brand": "Madhav Labs",
    "image": "images/ME-D3.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 99,
    "name": "M FLUK – 150",
    "composition": "Fluconazole 150 mg Tab (Dpco)",
    "mrp": 1350.0,
    "brand": "Madhav Labs",
    "image": "images/M_FLUK_–_150.jpg",
    "description": "25 X 4 X 1 BL"
  },
  {
    "id": 100,
    "name": "M FLUK – 200",
    "composition": "Fluconazole 200 mg Tab (Dpco)",
    "mrp": 1955.5,
    "brand": "Madhav Labs",
    "image": "images/M_FLUK_–_200.jpg",
    "description": "10 X 5 X 2 BL"
  },
  {
    "id": 101,
    "name": "M GRAIN -10",
    "composition": "Flunarizine 10 mg Tab (Dpco)",
    "mrp": 539.8,
    "brand": "Madhav Labs",
    "image": "images/M_GRAIN_-10.jpg",
    "description": "10  X 10 AA"
  },
  {
    "id": 102,
    "name": "M-KON 90",
    "composition": "Etoricoxib 90 mg Tab",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/M-KON_90.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 103,
    "name": "M-KON-120",
    "composition": "Etoricoxib 120mg Tab",
    "mrp": 1400.0,
    "brand": "Madhav Labs",
    "image": "images/M-KON-120.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 104,
    "name": "M-KON P",
    "composition": "Etoricoxib 60 mg, Paracetamol 325 mg Tabs",
    "mrp": 1350.0,
    "brand": "Madhav Labs",
    "image": "images/M-KON_P.jpg",
    "description": "10 X 15 BL"
  },
  {
    "id": 105,
    "name": "M KON -64 MR",
    "composition": "Etoricoxib 60 mg, Thiocolchicoside 4 mg Tab",
    "mrp": 2250.0,
    "brand": "Madhav Labs",
    "image": "images/M_KON_-64_MR.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 106,
    "name": "M - PAM",
    "composition": "Dicyclomine 20 mg, Paracetamol 325 mg Tab",
    "mrp": 1000.0,
    "brand": "Madhav Labs",
    "image": "images/M_-_PAM.jpg",
    "description": "4 X 5 X 10 BL"
  },
  {
    "id": 107,
    "name": "MMPX-4",
    "composition": "Methyl Prednisolone 4 mg Tabs",
    "mrp": 500.0,
    "brand": "Madhav Labs",
    "image": "images/MMPX-4.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 108,
    "name": "MMPX-8",
    "composition": "Methyl Prednisolone 8 mg Tabs (Dpco)",
    "mrp": 900.0,
    "brand": "Madhav Labs",
    "image": "images/MMPX-8.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 109,
    "name": "MNFX-130",
    "composition": "Montelukast 10 mg, Fexofenadine 120 mg Tab",
    "mrp": 1900.0,
    "brand": "Madhav Labs",
    "image": "images/MNFX-130.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 110,
    "name": "MC LAC",
    "composition": "B-Complex With Lactic acid Bacillus Tabs",
    "mrp": 600.0,
    "brand": "Madhav Labs",
    "image": "images/MC_LAC.jpg",
    "description": "10 X 15 ST"
  },
  {
    "id": 111,
    "name": "MOFCARE–200",
    "composition": "Ofloxacin 200 mg Tab (BLISTER)",
    "mrp": 730.0,
    "brand": "Madhav Labs",
    "image": "images/MOFCARE–200.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 112,
    "name": "MOFCARE–200",
    "composition": "Ofloxacin 200 mg Tab (ALU ALU)",
    "mrp": 750.0,
    "brand": "Madhav Labs",
    "image": "images/MOFCARE–200_2.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 113,
    "name": "MOFCARE - OZ",
    "composition": "Oflaxacin 200 mg, Ornidazole 500 mg Tab",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/MOFCARE_-_OZ.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 114,
    "name": "MOFCARE - OZ",
    "composition": "Oflaxacin 200 mg, Ornidazole 500 mg Tab (New attactive pack with Barcode )",
    "mrp": 1300.0,
    "brand": "Madhav Labs",
    "image": "images/MOFCARE_-_OZ_2.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 115,
    "name": "MOXSPEN– 250 DT",
    "composition": "Amoxycillin 250 mg Dispersible Tab",
    "mrp": 700.0,
    "brand": "Madhav Labs",
    "image": "images/MOXSPEN–_250_DT.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 116,
    "name": "MOXSPEN–500",
    "composition": "Amoxycillin 500 mg Caps(Dpco)",
    "mrp": 824.3,
    "brand": "Madhav Labs",
    "image": "images/MOXSPEN–500.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 117,
    "name": "MOXSPEN CL 375",
    "composition": "Amoxycillin 250 mg, Clavulanate Potassium 125 mg tab",
    "mrp": 1140.0,
    "brand": "Madhav Labs",
    "image": "images/MOXSPEN_CL_375.jpg",
    "description": "10 X 6 ST"
  },
  {
    "id": 118,
    "name": "MOXSPEN CL 625",
    "composition": "Amoxycillin 500 mg, Clavulanate Potassium 125 mg Tab (Dpco)",
    "mrp": 2049.6,
    "brand": "Madhav Labs",
    "image": "images/MOXSPEN_CL_625.jpg",
    "description": "10 X 1 X 10 ST"
  },
  {
    "id": 119,
    "name": "MOXSPEN CL 625 LB",
    "composition": "Amoxycillin 500mg, Pot. Clavulanate 125 mg , Lactic Acid Bacillius 60 Million Spores Tabs",
    "mrp": 2800.0,
    "brand": "Madhav Labs",
    "image": "images/MOXSPEN_CL_625_LB.jpg",
    "description": "10 X 1 X 10 ST"
  },
  {
    "id": 120,
    "name": "MOZ -500",
    "composition": "Ornidazole 500 Tabs",
    "mrp": 1400.0,
    "brand": "Madhav Labs",
    "image": "images/MOZ_-500.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 121,
    "name": "MYOVIG",
    "composition": "Metformin 500 mg, Myoinositol 600 mg Bilayered Tabs",
    "mrp": 2300.0,
    "brand": "Madhav Labs",
    "image": "images/MYOVIG.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 122,
    "name": "NU-GP",
    "composition": "Nortriptyline 10 mg, Gabapentin 400 mg Tabs",
    "mrp": 1600.0,
    "brand": "Madhav Labs",
    "image": "images/NU-GP.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 123,
    "name": "NU-P",
    "composition": "Nortriptyline Hcl 10 mg, Pregabalin 75 mg Tab",
    "mrp": 1500.0,
    "brand": "Madhav Labs",
    "image": "images/NU-P.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 124,
    "name": "NEUROMAC",
    "composition": "Methylcobalamin 500 mcg, Anti Oxidants,         Multivitamin & Multimineral Tabs",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/NEUROMAC.jpg",
    "description": "10 X 15 ST"
  },
  {
    "id": 125,
    "name": "NEUROMAC -GF",
    "composition": "Methylcobalamin 1000 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5mg, pyridoxine HCL 3mg, Thiaminemono 10 mg, Zinc Sulphate 61.8 mg, Glutamic Acid 100 mg , Vitamins Caps",
    "mrp": 1800.0,
    "brand": "Madhav Labs",
    "image": "images/NEUROMAC_-GF.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 126,
    "name": "NEUROMAC -GFS",
    "composition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5 mg, Vit.B6 1.5 mg, Chromium Picolinate 500 mcg, Sodium Selenate 75mcg, Zinc Sulphate Mono 7.5mg Softgel Caps",
    "mrp": 1900.0,
    "brand": "Madhav Labs",
    "image": "images/NEUROMAC_-GFS.jpg",
    "description": "10 X 1 X 10 BL"
  },
  {
    "id": 127,
    "name": "NEUROMAC -LC",
    "composition": "L –Carnitine, L-Tartrate 500 mg, \nMethylcobalamin 1500 mcg, Folic acid 1.5 mg Tabs",
    "mrp": 2850.0,
    "brand": "Madhav Labs",
    "image": "images/NEUROMAC_-LC.jpg",
    "description": "10 X 15 AA"
  },
  {
    "id": 128,
    "name": "NEUROMAC -PB",
    "composition": "Methylcobalamin 750 mcg,      Pregabalin 75 mg Caps",
    "mrp": 1400.0,
    "brand": "Madhav Labs",
    "image": "images/NEUROMAC_-PB.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 129,
    "name": "NEUROMAC - GP",
    "composition": "Methylcobalamin 500 mcg, Gabapentin 300 mg, Tab",
    "mrp": 1500.0,
    "brand": "Madhav Labs",
    "image": "images/NEUROMAC_-_GP.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 130,
    "name": "NEET",
    "composition": "Nimesulide 100 mg Tab",
    "mrp": 800.0,
    "brand": "Madhav Labs",
    "image": "images/NEET.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 131,
    "name": "NEET PLUS",
    "composition": "Nimesulide 100 mg, Paracetamol 325 mg Tab",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/NEET_PLUS.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 132,
    "name": "NEET-SP",
    "composition": "Nimesulide 100 mg, Paracetamol 325 mg,        Serratiopeptidase 15 mg Tab",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/NEET-SP.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 133,
    "name": "NEET CLP",
    "composition": "Nimesulide 100 mg , para 325 mg, Phenylephrine 10 mg, Caffiene 25 mg Tab",
    "mrp": 1380.0,
    "brand": "Madhav Labs",
    "image": "images/NEET_CLP.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 134,
    "name": "OFER - XL",
    "composition": "Ferrous Ascorbate Eq to elemental iron 100 mg , Folic acid 1.5 + zinc sulphate monohydrate eq to Elemental zinc 22.5 mg Tabs",
    "mrp": 1100.0,
    "brand": "Madhav Labs",
    "image": "images/OFER_-_XL.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 135,
    "name": "OFER XL PLUS",
    "composition": "Ferrous pyrophosphate 60 mg, Cyanocobalamin 1mcg folic acid 300 mcg, zinc sulphate  monhydrate-eq to elemental zinc 7.5 mg SOFT gel caps",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/OFER_XL_PLUS.jpg",
    "description": "10 X 1 X 10 BL"
  },
  {
    "id": 136,
    "name": "ORFINE - 250",
    "composition": "Terbinafine 250 Tab",
    "mrp": 1330.0,
    "brand": "Madhav Labs",
    "image": "images/ORFINE_-_250.jpg",
    "description": "10 X 1 X 7 BL"
  },
  {
    "id": 137,
    "name": "ORVIG -M",
    "composition": "Diacerin 50mg, Glucosamine Sulphate 750 mg, Methyl Sulfonyl Methane (MSM) 250 mg Tabs",
    "mrp": 2300.0,
    "brand": "Madhav Labs",
    "image": "images/ORVIG_-M.jpg",
    "description": "10 X 1 X 10 AA"
  },
  {
    "id": 138,
    "name": "PRO - FIT",
    "composition": "Prebiotic & Probiotic sachet",
    "mrp": 700.0,
    "brand": "Madhav Labs",
    "image": "images/PRO_-_FIT.jpg",
    "description": "25 X  1 Sachets"
  },
  {
    "id": 139,
    "name": "PRO - FIT",
    "composition": "Prebiotic & probiotic (Bifidobacterium & Lactobacillus) Caps",
    "mrp": 1700.0,
    "brand": "Madhav Labs",
    "image": "images/PRO_-_FIT_2.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 140,
    "name": "PRECARE -100",
    "composition": "Micronised Progesterone 100 mg TAB",
    "mrp": 1800.0,
    "brand": "Madhav Labs",
    "image": "images/PRECARE_-100.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 141,
    "name": "PLEXFORTE",
    "composition": "Multivitamin & Multimineral Tab",
    "mrp": 600.0,
    "brand": "Madhav Labs",
    "image": "images/PLEXFORTE.jpg",
    "description": "10 X 15 ST"
  },
  {
    "id": 142,
    "name": "PLEXFORTE - ZL",
    "composition": "Lycopene 6% 2000 mcg, Vit A, E, C, Zinc & Selenium Softgel Caps",
    "mrp": 890.0,
    "brand": "Madhav Labs",
    "image": "images/PLEXFORTE_-_ZL.jpg",
    "description": "10 X 1 X 10 BL"
  },
  {
    "id": 143,
    "name": "RAVIG - 20",
    "composition": "Rabeprazole 20 mg Tab",
    "mrp": 1050.0,
    "brand": "Madhav Labs",
    "image": "images/RAVIG_-_20.jpg",
    "description": "10 X 15 AA"
  },
  {
    "id": 144,
    "name": "RAVIG - D",
    "composition": "Rabeprazole 20 mg, Domperidone 10 mg Tab",
    "mrp": 790.0,
    "brand": "Madhav Labs",
    "image": "images/RAVIG_-_D.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 145,
    "name": "RAVIG - D",
    "composition": "Rabeprazole 20 mg, Domperidone 10 mg Tab",
    "mrp": 1270.0,
    "brand": "Madhav Labs",
    "image": "images/RAVIG_-_D_2.jpg",
    "description": "10 X 15 AA (Numbering base foil)"
  },
  {
    "id": 146,
    "name": "RAVIG - DSR",
    "composition": "Rabeprazole 20 mg, Domperidone 30 mg SR Cap (STRIP)",
    "mrp": 1050.0,
    "brand": "Madhav Labs",
    "image": "images/RAVIG_-_DSR.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 147,
    "name": "RAVIG - DSR",
    "composition": "Rabeprazole 20 mg, Domperidone 30 mg SR Cap (Alu Alu)",
    "mrp": 1100.0,
    "brand": "Madhav Labs",
    "image": "images/RAVIG_-_DSR_2.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 148,
    "name": "RAVIG - DSR",
    "composition": "Rabeprazole 20 mg, Domperidone 30 mg SR Cap (Alu Alu)",
    "mrp": 1800.0,
    "brand": "Madhav Labs",
    "image": "images/RAVIG_-_DSR_3.jpg",
    "description": "10 X 15 AA Alkem pack"
  },
  {
    "id": 149,
    "name": "RAVIG DSR-TT",
    "composition": "Rabeprazole 20 mg, Domperidone 30 mg SR Cap (Tablet Technology)",
    "mrp": 2100.0,
    "brand": "Madhav Labs",
    "image": "images/RAVIG_DSR-TT.jpg",
    "description": "10 X 15 BL"
  },
  {
    "id": 150,
    "name": "RAVIG - LP",
    "composition": "Rabeprazole 20 mg Levosulpride 75 mg SR Caps",
    "mrp": 1700.0,
    "brand": "Madhav Labs",
    "image": "images/RAVIG_-_LP.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 151,
    "name": "ROSBEX-C",
    "composition": "Rosehip Extract 275 mg, Vitamin C 20 mg, Curcumin Extract 400 mg VEG CAPS",
    "mrp": 3120.0,
    "brand": "Madhav Labs",
    "image": "images/ROSBEX-C.jpg",
    "description": "4 X 1 X 20 Bottl"
  },
  {
    "id": 152,
    "name": "S COLD PLUS",
    "composition": "Paracetamol 500 mg, Phenylephrine 5 mg, Caffeine 30 mg, Diphenhydramine 25 mg Tab",
    "mrp": 1000.0,
    "brand": "Madhav Labs",
    "image": "images/S_COLD_PLUS.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 153,
    "name": "S DOL-10",
    "composition": "Serratiopeptidase 10 mg Tab",
    "mrp": 550.0,
    "brand": "Madhav Labs",
    "image": "images/S_DOL-10.jpg",
    "description": "10 X 10 ST"
  },
  {
    "id": 154,
    "name": "S DOL - D",
    "composition": "Diclofenac Potassium 50 mg       Serratiopeptidase 10 mg Tab",
    "mrp": 790.0,
    "brand": "Madhav Labs",
    "image": "images/S_DOL_-_D.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 155,
    "name": "S DOL - D",
    "composition": "Diclofenac Potassium 50 mg       Serratiopeptidase 10 mg Tab",
    "mrp": 1185.0,
    "brand": "Madhav Labs",
    "image": "images/S_DOL_-_D_2.jpg",
    "description": "10 X 1 X 15 AA (New attractive pack)"
  },
  {
    "id": 156,
    "name": "SIXER",
    "composition": "Diclofenac Potassium 50 mg, Paracetamol 325 mg Tab",
    "mrp": 900.0,
    "brand": "Madhav Labs",
    "image": "images/SIXER.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 157,
    "name": "SIXER PLUS",
    "composition": "Diclofenac Potassium 50 mg, Paracetamol        325 mg, Chlorzoxazone 250mg Tab",
    "mrp": 1600.0,
    "brand": "Madhav Labs",
    "image": "images/SIXER_PLUS.jpg",
    "description": "20 X 10 BL"
  },
  {
    "id": 158,
    "name": "STIFTAZ-40",
    "composition": "Febuxostat 40 mg Tabs",
    "mrp": 990.0,
    "brand": "Madhav Labs",
    "image": "images/STIFTAZ-40.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 159,
    "name": "STUFVIG",
    "composition": "Camphor 25 mg, Chlorothymol 5 mg, Eucalyptol 125 mg, Menthol 55mg , Terpineol 120 mg soft Gelatin caps",
    "mrp": 950.0,
    "brand": "Madhav Labs",
    "image": "images/STUFVIG.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 160,
    "name": "TAK-MD",
    "composition": "Esomeprazole 20 mg, Domperidone 30 mg SR Cap",
    "mrp": 1000.0,
    "brand": "Madhav Labs",
    "image": "images/TAK-MD.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 161,
    "name": "TAK-MDS",
    "composition": "Esomeprazole 40 mg Domperidone 30mg SR CAPS",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/TAK-MDS.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 162,
    "name": "TENDOVIG",
    "composition": "Collagen Peptide Type I 40 mg, Sodium Hyaluronate 30 mg, Chondroitin Sulfate Sodium 200 mg, Vitamin C 35 mg Tabs",
    "mrp": 3000.0,
    "brand": "Madhav Labs",
    "image": "images/TENDOVIG.jpg",
    "description": "10 X 1 X 15 AA"
  },
  {
    "id": 163,
    "name": "TENDOVIG II PLUS",
    "composition": "Collagen Peptide (type-II), Glucosamine Chondroitin, Vitamins & Minerals Tabs",
    "mrp": 1500.0,
    "brand": "Madhav Labs",
    "image": "images/TENDOVIG_II_PLUS.jpg",
    "description": "6 X 1 X 10 AA"
  },
  {
    "id": 164,
    "name": "TAPVIG -50",
    "composition": "Tapentadol 50 Tab",
    "mrp": 1800.0,
    "brand": "Madhav Labs",
    "image": "images/TAPVIG_-50.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 165,
    "name": "TOLVIG-150",
    "composition": "Tolperisone 150 mg Tab",
    "mrp": 1390.0,
    "brand": "Madhav Labs",
    "image": "images/TOLVIG-150.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 166,
    "name": "TOSS-TS4",
    "composition": "Etodolac 400 mg, Thiocolchicoside 4 mg Tabs",
    "mrp": 1450.0,
    "brand": "Madhav Labs",
    "image": "images/TOSS-TS4.jpg",
    "description": "5 X 1 X 10 AA"
  },
  {
    "id": 167,
    "name": "TREAT PLUS",
    "composition": "Tramadol 37.5 mg, Paracetamol 325 mg Tab",
    "mrp": 1500.0,
    "brand": "Madhav Labs",
    "image": "images/TREAT_PLUS.jpg",
    "description": "10 X 1 X 15 BL"
  },
  {
    "id": 168,
    "name": "URSOVIG-300",
    "composition": "Ursodeoxycholic acid 300 mg Tabs",
    "mrp": 5850.0,
    "brand": "Madhav Labs",
    "image": "images/URSOVIG-300.jpg",
    "description": "10 X 15 BL"
  },
  {
    "id": 169,
    "name": "VIGBI-20",
    "composition": "Bilastine 20 mg Tabs",
    "mrp": 1300.0,
    "brand": "Madhav Labs",
    "image": "images/VIGBI-20.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 170,
    "name": "VIGBI-MN",
    "composition": "Bilastine 20 mg , Montelukast 10 mg Tabs",
    "mrp": 1800.0,
    "brand": "Madhav Labs",
    "image": "images/VIGBI-MN.jpg",
    "description": "10 X 10AA"
  },
  {
    "id": 171,
    "name": "VIGDOT-100",
    "composition": "Racecadotril 100 mg Caps ",
    "mrp": 3300.0,
    "brand": "Madhav Labs",
    "image": "images/VIGDOT-100.jpg",
    "description": "10 X 15 BL"
  },
  {
    "id": 172,
    "name": "VOMIVEN-MD",
    "composition": "Ondonsetron 4 mg Mouth Dissolving Tabs (Dpco)",
    "mrp": 575.6,
    "brand": "Madhav Labs",
    "image": "images/VOMIVEN-MD.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 173,
    "name": "V-ZYME",
    "composition": "Alpha Amylase 100 mg, Papain 60 mg, Activated Charcoal 75 mg Tabs",
    "mrp": 600.0,
    "brand": "Madhav Labs",
    "image": "images/V-ZYME.jpg",
    "description": "10 X 15 ST"
  },
  {
    "id": 174,
    "name": "Z-PES",
    "composition": "Calcitriol 0.25 mcg, Calcium Carbonate 500 mg, Zinc Sulphate 7.5 mg Soft Gel Caps",
    "mrp": 2250.0,
    "brand": "Madhav Labs",
    "image": "images/Z-PES.jpg",
    "description": "5 X 2 X 15 BL"
  },
  {
    "id": 175,
    "name": "Z-PES",
    "composition": "Calcitriol 0.25 mcg, Calcium Carbonate 500 mg, Zinc Sulphate 7.5 mg Soft Gel Caps",
    "mrp": 2700.0,
    "brand": "Madhav Labs",
    "image": "images/Z-PES_2.jpg",
    "description": "10 X 1 X 15 BL New attactive pack"
  },
  {
    "id": 176,
    "name": "ZOMCARE–20",
    "composition": "Omeprazole 20 mg Caps (Dpco)",
    "mrp": 960.0,
    "brand": "Madhav Labs",
    "image": "images/ZOMCARE–20.jpg",
    "description": "20 X 15 ST"
  },
  {
    "id": 177,
    "name": "ZOMCARE–D",
    "composition": "Omeprazole 20 mg, Domperidone 10mg Caps",
    "mrp": 900.0,
    "brand": "Madhav Labs",
    "image": "images/ZOMCARE–D.jpg",
    "description": "10 X 15 ST"
  },
  {
    "id": 178,
    "name": "ZEDVIG +",
    "composition": "Trypsin 48 mg, Bromelain 90 mg, Rutoside, Trihydrate100 mg, Diclofenac Sod. 50 mg Tabs",
    "mrp": 2000.0,
    "brand": "Madhav Labs",
    "image": "images/ZEDVIG_+.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 179,
    "name": "ZEDVIG-TCS",
    "composition": "Trypsin, Chymotrypsin, Acelclofenac100 mg, Paracetamol 325 mg Tabs",
    "mrp": 1900.0,
    "brand": "Madhav Labs",
    "image": "images/ZEDVIG-TCS.jpg",
    "description": "10 X 1 X 10 AA"
  },
  {
    "id": 180,
    "name": "BEST-M",
    "composition": "Gliclazide 80 mg, Metformin 500 mg Tab",
    "mrp": 1100.0,
    "brand": "Madhav Labs",
    "image": "images/BEST-M.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 181,
    "name": "DAOCON-M",
    "composition": "Glibenclamide 5mg, Metformin 500mgTab",
    "mrp": 350.0,
    "brand": "Madhav Labs",
    "image": "images/DAOCON-M.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 182,
    "name": "GRIP – M 1 SR",
    "composition": "Glimepride 1 mg, Metformin 500 mg SR Bilayered Tab",
    "mrp": 790.0,
    "brand": "Madhav Labs",
    "image": "images/GRIP_–_M_1_SR.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 183,
    "name": "GRIP – M 2 SR",
    "composition": "Glimepride 2 mg, Metformin 500 mg (SR) Bilayered Tab",
    "mrp": 890.0,
    "brand": "Madhav Labs",
    "image": "images/GRIP_–_M_2_SR.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 184,
    "name": "LOVIG -HT",
    "composition": "Losartan potassium 50 mg, Hydrochlorothizide 12.5",
    "mrp": 700.0,
    "brand": "Madhav Labs",
    "image": "images/LOVIG_-HT.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 185,
    "name": "LYVIT-D",
    "composition": "Protein Powder with American Ice cream flavour Protein Powder",
    "mrp": 270.0,
    "brand": "Madhav Labs",
    "image": "images/LYVIT-D.jpg",
    "description": "200 gm"
  },
  {
    "id": 186,
    "name": "LYVIT-D",
    "composition": "Protein Powder with American Ice cream flavour Protein Powder",
    "mrp": 299.0,
    "brand": "Madhav Labs",
    "image": "images/LYVIT-D_2.jpg",
    "description": "200 gm"
  },
  {
    "id": 187,
    "name": "M LINA FORTE",
    "composition": "Antioxidants with Lycopene Caps",
    "mrp": 1350.0,
    "brand": "Madhav Labs",
    "image": "images/M_LINA_FORTE.jpg",
    "description": "5 X 2 X 15 BL"
  },
  {
    "id": 188,
    "name": "PINVIG-AT",
    "composition": "Amlodipine 5 mg, Atenolol 50 mg Tabs",
    "mrp": 500.0,
    "brand": "Madhav Labs",
    "image": "images/PINVIG-AT.jpg",
    "description": "10 X 10 AA"
  },
  {
    "id": 189,
    "name": "WYMET",
    "composition": "Metformin 500 mg Tab  (Dpco)",
    "mrp": 337.0,
    "brand": "Madhav Labs",
    "image": "images/WYMET.jpg",
    "description": "10 X 15 BL"
  },
  {
    "id": 190,
    "name": "CPT-500 Caps",
    "composition": "Carica Papaya Leaves Ext 350 mg, Tinospora Cordifolia Stem Ext 150 mg Caps",
    "mrp": 3000.0,
    "brand": "Madhav Labs",
    "image": "images/CPT-500_Caps.jpg",
    "description": "10 X 1 X 10 AA"
  },
  {
    "id": 191,
    "name": "CPT Syp",
    "composition": "Platelet Enhancer SYR",
    "mrp": 199.0,
    "brand": "Madhav Labs",
    "image": "images/CPT_Syp.jpg",
    "description": "200 ml"
  },
  {
    "id": 192,
    "name": "GYVIG SYR",
    "composition": "UTERINE TONIC",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/GYVIG_SYR.jpg",
    "description": "200 ml"
  },
  {
    "id": 193,
    "name": "MADHAV BALM",
    "composition": "Herbal Pain Relief balm",
    "mrp": 49.0,
    "brand": "Madhav Labs",
    "image": "images/MADHAV_BALM.jpg",
    "description": "12 gm"
  },
  {
    "id": 194,
    "name": "MX SHAK",
    "composition": "Supplement of Vigour & Vitality caps for Men",
    "mrp": 2300.0,
    "brand": "Madhav Labs",
    "image": "images/MX_SHAK.jpg",
    "description": "5 X 2 X 10 AA"
  },
  {
    "id": 195,
    "name": "M-52 DS CAP",
    "composition": "LIVER CAPS",
    "mrp": 690.0,
    "brand": "Madhav Labs",
    "image": "images/M-52_DS_CAP.jpg",
    "description": "10 X 10 BL"
  },
  {
    "id": 196,
    "name": "M-52 DS SYR",
    "composition": "LIVER TONIC SYR",
    "mrp": 168.0,
    "brand": "Madhav Labs",
    "image": "images/M-52_DS_SYR.jpg",
    "description": "200 ml"
  },
  {
    "id": 197,
    "name": "OS-M ROLL ON",
    "composition": "Herbal Pain Relief Roll on",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/OS-M_ROLL_ON.jpg",
    "description": "60 ml"
  },
  {
    "id": 198,
    "name": "YESTONE TAB",
    "composition": "STONE CRUSHER TAB",
    "mrp": 1125.0,
    "brand": "Madhav Labs",
    "image": "images/YESTONE_TAB.jpg",
    "description": "30 X 5 BL"
  },
  {
    "id": 199,
    "name": "YESTONE SYR",
    "composition": "STONE CRUSHER Sugar free Syp",
    "mrp": 179.0,
    "brand": "Madhav Labs",
    "image": "images/YESTONE_SYR.jpg",
    "description": "200 ml"
  },
  {
    "id": 200,
    "name": "ABDAL PLUS",
    "composition": "Aceclofenac 50 mg, Paracetamol 125 mg Susp",
    "mrp": 69.0,
    "brand": "Madhav Labs",
    "image": "images/ABDAL_PLUS_3.jpg",
    "description": "60 ml"
  },
  {
    "id": 201,
    "name": "AB-LAX (dpco)",
    "composition": "Lactulose 10 % Solution",
    "mrp": 258.3,
    "brand": "Madhav Labs",
    "image": "images/AB-LAX_(dpco).jpg",
    "description": "200 ml"
  },
  {
    "id": 202,
    "name": "ALKAVIG",
    "composition": "Disodium Hydrogen Citrate 1.40 mg Syp",
    "mrp": 99.0,
    "brand": "Madhav Labs",
    "image": "images/ALKAVIG.jpg",
    "description": "100 ml (PET)"
  },
  {
    "id": 203,
    "name": "AMBRO-AB",
    "composition": "Ambroxol 15 mg, Terbutaline Sulphate1.25       mg, Guaiphenesin 50 mg, Menthol 2.5 mg      Syp (Regular)",
    "mrp": 109.0,
    "brand": "Madhav Labs",
    "image": "images/AMBRO-AB.jpg",
    "description": "100 ml (PET)"
  },
  {
    "id": 204,
    "name": "AMBRO-AB SF\n(Sugar Free)",
    "composition": "Ambroxol 15 mg, Terbutaline Sulphate        1.25 mg, Guaiphenesin 50 mg,    Menthol 1.5 mg Syp",
    "mrp": 109.0,
    "brand": "Madhav Labs",
    "image": "images/AMBRO-AB_SF\n(Sugar_Free).jpg",
    "description": "100 ml (PET)"
  },
  {
    "id": 205,
    "name": "AMBRO -DX",
    "composition": "Dextromethorphan hydrobromide 10 mg , Ambroxol 15mg, Phenylephrine 5mg, Cpm 2 mg Menthol 1.5 mg Syp",
    "mrp": 109.0,
    "brand": "Madhav Labs",
    "image": "images/AMBRO_-DX.jpg",
    "description": "100 ml (PET)"
  },
  {
    "id": 206,
    "name": "AMB-LS Drops",
    "composition": "Ambroxol HCL 7.5 mg, Levosulbutamol 0.25 mg, Guaiphenesin 12.5 mg Drops",
    "mrp": 69.0,
    "brand": "Madhav Labs",
    "image": "images/AMB-LS_Drops.jpg",
    "description": "15 ml pet"
  },
  {
    "id": 207,
    "name": "AMB-LS Syp",
    "composition": "Ambroxol HCL 30 mg, Levosulbutamol 1 mg, Guaiphenesin 50 mg Syp (Regular)",
    "mrp": 105.0,
    "brand": "Madhav Labs",
    "image": "images/AMB-LS_Syp.jpg",
    "description": "100 ml (PET)"
  },
  {
    "id": 208,
    "name": "AMB-LS Syp",
    "composition": "Ambroxol HCL 30 mg, Levosulbutamol      1 mg, Guaiphenesin 50 mg Syp(Cherry & Strawberry flavour)",
    "mrp": 109.0,
    "brand": "Madhav Labs",
    "image": "images/AMB-LS_Syp_2.jpg",
    "description": "100 ml (PET)"
  },
  {
    "id": 209,
    "name": "BRENZ PLUS",
    "composition": "Acebrophylline 50 mg , Guaiphenesin 50 mg, Terbutaline sulphate 1.25 mg Syp",
    "mrp": 145.0,
    "brand": "Madhav Labs",
    "image": "images/BRENZ_PLUS.jpg",
    "description": "100 ml"
  },
  {
    "id": 210,
    "name": "CALSPAN",
    "composition": "Calcium Carbonate, Magnesium Hydroxide,     Zinc Gluconate, Vitamin D3 Susp",
    "mrp": 119.0,
    "brand": "Madhav Labs",
    "image": "images/CALSPAN.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 211,
    "name": "CARVIP",
    "composition": "Ferric ammonium Citrate, Lycopene, Mecobalamin and Zinc Syp",
    "mrp": 139.0,
    "brand": "Madhav Labs",
    "image": "images/CARVIP.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 212,
    "name": "D-TUSS SYR",
    "composition": "Dextromethorphan hydrobromide 10 mg, CPM 2 mg, Phenylephrine Hcl 5 mg Syp",
    "mrp": 105.0,
    "brand": "Madhav Labs",
    "image": "images/D-TUSS_SYR.jpg",
    "description": "100 ml"
  },
  {
    "id": 213,
    "name": "D-TUSS SYR",
    "composition": "Dextromethorphan hydrobromide 10 mg,        CPM 2 mg, Phenylephrine Hcl 5 mg Syp",
    "mrp": 109.0,
    "brand": "Madhav Labs",
    "image": "images/D-TUSS_SYR_2.jpg",
    "description": "100 ml Paan Flavour"
  },
  {
    "id": 214,
    "name": "D TUSS-CN",
    "composition": "Dextromethorphan HBR 5 mg, Phenylephrine HCL 2.5 mg, Citirizine Dihydrochloride 5 mg \n",
    "mrp": 109.0,
    "brand": "Madhav Labs",
    "image": "images/D_TUSS-CN.jpg",
    "description": "100 ml"
  },
  {
    "id": 215,
    "name": "D TUSS-CP",
    "composition": "Paracetamol 250 mg , Dextromethorphan HBR 5 mg, Phenylephrine HCL 5 mg, Cetirizine hydrochloride 2.5 mg, Sodium citrate 25 mg &Menthol 1 mg Susp \n",
    "mrp": 85.0,
    "brand": "Madhav Labs",
    "image": "images/D_TUSS-CP.jpg",
    "description": "60 ml"
  },
  {
    "id": 216,
    "name": "DULAK PLUS",
    "composition": "Liquid paraffin 1.25 ml, Milk of magnesia       3.75 ml, Sodium picosulphate 3.33 mg Syp",
    "mrp": 159.0,
    "brand": "Madhav Labs",
    "image": "images/DULAK_PLUS.jpg",
    "description": "170 ml (PET)"
  },
  {
    "id": 217,
    "name": "EBEX PLUS",
    "composition": "Albendazole 200 mg , Ivermectin 1.5 mg susp",
    "mrp": 49.0,
    "brand": "Madhav Labs",
    "image": "images/EBEX_PLUS.jpg",
    "description": "10 ml"
  },
  {
    "id": 218,
    "name": "FEP",
    "composition": "Paracetamol 250 mg Susp (Dpco )",
    "mrp": 45.0,
    "brand": "Madhav Labs",
    "image": "images/FEP.jpg",
    "description": "60 ml (PET)"
  },
  {
    "id": 219,
    "name": "FEP",
    "composition": "Paracetamol 250 mg Susp (Dpco )",
    "mrp": 75.0,
    "brand": "Madhav Labs",
    "image": "images/FEP_2.jpg",
    "description": "100 ml (Pet)"
  },
  {
    "id": 220,
    "name": "GEFPLUS",
    "composition": "Paracetamol 125 mg,    Mefenamic Acid 50 mg Susp",
    "mrp": 55.0,
    "brand": "Madhav Labs",
    "image": "images/GEFPLUS_2.jpg",
    "description": "60 ml (PET)"
  },
  {
    "id": 221,
    "name": "GEF PLUS DS",
    "composition": "Mefenamic acid 100 mg,  Paracetamol 250 mg Susp",
    "mrp": 69.0,
    "brand": "Madhav Labs",
    "image": "images/GEF_PLUS_DS.jpg",
    "description": "60 ml"
  },
  {
    "id": 222,
    "name": "HANEX",
    "composition": "Diphenhydramine 14.08 mg, Ammonium      Chloride 138 mg, Sodium Citrate 57.03 mg,    Menthol 4 mg Syp",
    "mrp": 109.0,
    "brand": "Madhav Labs",
    "image": "images/HANEX.jpg",
    "description": "100 ml (PET)"
  },
  {
    "id": 223,
    "name": "HANGEL",
    "composition": "Dried Aluminium Hydroxide Gel 250 mg, Magnesium Hydroxide 250 mg, Simethicone 50 mg Susp (MANGO FLAVOUR) with multi-colour measuring cup",
    "mrp": 105.0,
    "brand": "Madhav Labs",
    "image": "images/HANGEL.jpg",
    "description": "170 ml (PET)"
  },
  {
    "id": 224,
    "name": "HANGEL",
    "composition": "Dried Aluminium Hydroxide Gel 250 mg, Magnesium Hydroxide 250 mg, Simethicone 50 mg Susp (ANISEED FLAVOUR) with multi-colour measuring cup",
    "mrp": 105.0,
    "brand": "Madhav Labs",
    "image": "images/HANGEL_2.jpg",
    "description": "170 ml (PET)"
  },
  {
    "id": 225,
    "name": "HANGEL O",
    "composition": "Aluminium Hydroxide 250 mg, Magnesium Hydroxide 250 mg, Simethicone 50 mg & Oxetacaine 10 mg Suspension with multi-colour measuring cup",
    "mrp": 189.0,
    "brand": "Madhav Labs",
    "image": "images/HANGEL_O.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 226,
    "name": "HANGEL O",
    "composition": "Aluminium Hydroxide 250 mg, Magnesium Hydroxide 250 mg, Simethicone 50 mg & Oxetacaine 10 mg Suspension with multi-colour measuring cup",
    "mrp": 145.0,
    "brand": "Madhav Labs",
    "image": "images/HANGEL_O_2.jpg",
    "description": "170 ml (PET)"
  },
  {
    "id": 227,
    "name": "LYCET MN KID",
    "composition": "Levocetirizine 2.5 mg, Montelukast 4 mg Syp",
    "mrp": 95.0,
    "brand": "Madhav Labs",
    "image": "images/LYCET_MN_KID.jpg",
    "description": "60 ml"
  },
  {
    "id": 228,
    "name": "LIVIG-M",
    "composition": "Silymarin, L-Ornithine-L-Aspartate, Choline Citrate with Multivitamin Syrup",
    "mrp": 249.0,
    "brand": "Madhav Labs",
    "image": "images/LIVIG-M.jpg",
    "description": "200 ml"
  },
  {
    "id": 229,
    "name": "MAYO-D3",
    "composition": "Cholecalciferol 400 IU Drops",
    "mrp": 69.0,
    "brand": "Madhav Labs",
    "image": "images/MAYO-D3.jpg",
    "description": "15 ml"
  },
  {
    "id": 230,
    "name": "MAYO -D3 NANO SHOT",
    "composition": "Vitamin oral solution \n60000 IU Nano shot \n",
    "mrp": 276.0,
    "brand": "Madhav Labs",
    "image": "images/MAYO_-D3_NANO_SHOT.jpg",
    "description": "4 X 5 ml"
  },
  {
    "id": 231,
    "name": "M-BCS",
    "composition": "Bacillus Clausii Spores Supsension 2 Billion spores",
    "mrp": 708.0,
    "brand": "Madhav Labs",
    "image": "images/M-BCS.jpg",
    "description": "12 Mini bott"
  },
  {
    "id": 232,
    "name": "MOFCARE -MZ",
    "composition": "Ofloxacin 50mg, Metronidazole 120 mg, Simethicone 10 mg Susp",
    "mrp": 79.0,
    "brand": "Madhav Labs",
    "image": "images/MOFCARE_-MZ.jpg",
    "description": "30 ml"
  },
  {
    "id": 233,
    "name": "MP4 DROPS",
    "composition": "Paracetamol 125 mg, Phenylephrine 2.5 mg, Chlorpheniramine Maleate 1 mg Drops (NEW )",
    "mrp": 85.0,
    "brand": "Madhav Labs",
    "image": "images/MP4_DROPS.jpg",
    "description": "15 ml"
  },
  {
    "id": 234,
    "name": "MP4",
    "composition": "Paracetamol 125 mg, Phenylephrine 5 mg, Chlorpheniramine Maleate 1 mg Susp",
    "mrp": 69.0,
    "brand": "Madhav Labs",
    "image": "images/MP4.jpg",
    "description": "60 ml (PET)"
  },
  {
    "id": 235,
    "name": "MP4 DS",
    "composition": "Paracetamol 250 mg, Phenylephrine 5 mg, pheniramine Maleate 2 mg, \nSodium Citrate 60 mg Susp",
    "mrp": 79.0,
    "brand": "Madhav Labs",
    "image": "images/MP4_DS.jpg",
    "description": "60 ml (PET)"
  },
  {
    "id": 236,
    "name": "MP4-AF",
    "composition": "Phenylephrine 5 mg, Chlorpheniramine Maleate 2 mg Drops(NEW )",
    "mrp": 79.0,
    "brand": "Madhav Labs",
    "image": "images/MP4-AF.jpg",
    "description": "15 ml"
  },
  {
    "id": 237,
    "name": "M-SPAS",
    "composition": "Dill oil 0.005 ml, Fennel oil 0.0007 ml, Simethicone 40 mg Drops",
    "mrp": 79.0,
    "brand": "Madhav Labs",
    "image": "images/M-SPAS.jpg",
    "description": "30 ml"
  },
  {
    "id": 238,
    "name": "PLEX FORTE",
    "composition": "B Complex Syrup",
    "mrp": 129.0,
    "brand": "Madhav Labs",
    "image": "images/PLEX_FORTE.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 239,
    "name": "PLEXFORTE- ZL JUNIOR",
    "composition": "Multivitamin, Minerals & Antioxidants Syp",
    "mrp": 79.0,
    "brand": "Madhav Labs",
    "image": "images/PLEXFORTE-_ZL_JUNIOR.jpg",
    "description": "100 ml (PET)"
  },
  {
    "id": 240,
    "name": "PLEXFORTE- ZL",
    "composition": "Lycopene 6%, Vit A, C, E, B, B2, B6, B12, D-Panthenol, Vit D3 Syp",
    "mrp": 159.0,
    "brand": "Madhav Labs",
    "image": "images/PLEXFORTE-_ZL.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 241,
    "name": "POTVIG -B6",
    "composition": "Potassim citrate IP 1100 mg , Magnesium Citrate usp 375 mg, Vitamin B6 20 mg Syrup",
    "mrp": 199.0,
    "brand": "Madhav Labs",
    "image": "images/POTVIG_-B6.jpg",
    "description": "200 ml"
  },
  {
    "id": 242,
    "name": "REJUPLEX",
    "composition": "Multivitamins and Multiminerals SUGAR FREE Syrup",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/REJUPLEX.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 243,
    "name": "REPRO-Z",
    "composition": "Iron, Protein with Zinc Syrup",
    "mrp": 119.0,
    "brand": "Madhav Labs",
    "image": "images/REPRO-Z.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 244,
    "name": "SALCAIN",
    "composition": "Sucralfate 1 gm, Oxetacaine 20 mg Syrup",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/SALCAIN.jpg",
    "description": "100 ml"
  },
  {
    "id": 245,
    "name": "SALCAIN",
    "composition": "Sucralfate 1 gm, Oxetacaine 20 mg Syrup",
    "mrp": 259.0,
    "brand": "Madhav Labs",
    "image": "images/SALCAIN_2.jpg",
    "description": "200 ml"
  },
  {
    "id": 246,
    "name": "VIGRAFT",
    "composition": "Sodium Alginate 250 mg, Sodium bicarbonate 133.5 mg, Calcium carbonate 80 mg Susp \n",
    "mrp": 219.0,
    "brand": "Madhav Labs",
    "image": "images/VIGRAFT.jpg",
    "description": "200 ml"
  },
  {
    "id": 247,
    "name": "VOMIVEN (dpco)",
    "composition": "Ondansetron 2 mg Drops",
    "mrp": 42.0,
    "brand": "Madhav Labs",
    "image": "images/VOMIVEN_(dpco).jpg",
    "description": "30 ml"
  },
  {
    "id": 248,
    "name": "V ZYME Drops",
    "composition": "Carminative Mixture with Digestive Enzyme Drops",
    "mrp": 69.0,
    "brand": "Madhav Labs",
    "image": "images/V_ZYME_Drops.jpg",
    "description": "15 ml"
  },
  {
    "id": 249,
    "name": "V ZYME",
    "composition": "Diastase 50 mg, Pepsin 10 mg Syrup",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/V_ZYME.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 250,
    "name": "V ZYME -BC",
    "composition": "Digestive Enzyme with B-complex syr",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/V_ZYME_-BC.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 251,
    "name": "ZEVIP",
    "composition": "Iron( III) L-Lysine and Zinc Syrup",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/ZEVIP.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 252,
    "name": "ZYPON",
    "composition": "Cyproheptadine Hcl 2 mg, Tricoline Citrate 275 mg Syp",
    "mrp": 145.0,
    "brand": "Madhav Labs",
    "image": "images/ZYPON.jpg",
    "description": "200 ml (PET)"
  },
  {
    "id": 253,
    "name": "M PROTEIN C",
    "composition": "Protein powder with Chocolate flavour with lycopene(New attarctive Pack with DHA)",
    "mrp": 299.0,
    "brand": "Madhav Labs",
    "image": "images/M_PROTEIN_C.jpg",
    "description": "200 gm Tin"
  },
  {
    "id": 254,
    "name": "LYVIT-Z",
    "composition": "Protein Powder with American, Icecream flavour with Mecobalamin & lycopene",
    "mrp": 245.0,
    "brand": "Madhav Labs",
    "image": "images/LYVIT-Z.jpg",
    "description": "200 gm"
  },
  {
    "id": 255,
    "name": "LYVIT-Z",
    "composition": "Protein Powder with American, Icecream flavour with Mecobalamin & lycopene",
    "mrp": 275.0,
    "brand": "Madhav Labs",
    "image": "images/LYVIT-Z_2.jpg",
    "description": "200 gm"
  },
  {
    "id": 256,
    "name": "REDY-DF",
    "composition": "Protein Powder with Badam flavour with Dry Fruits",
    "mrp": 395.0,
    "brand": "Madhav Labs",
    "image": "images/REDY-DF.jpg",
    "description": "200 gm with TIN"
  },
  {
    "id": 257,
    "name": "REDIFER",
    "composition": "Chocolate flavour with lycopene GRANULES",
    "mrp": 250.0,
    "brand": "Madhav Labs",
    "image": "images/REDIFER.jpg",
    "description": "200 gm"
  },
  {
    "id": 258,
    "name": "ABDAL GEL",
    "composition": "Aceclofenac IP 1.5% w/w, Linseed oil BP3% w/w , Methyl Salicylate IP 10 % w/w , Menthol IP 5% w/w, Capsaicin USP 0.01% w/w",
    "mrp": NaN,
    "brand": "Madhav Labs",
    "image": "images/ABDAL_GEL.jpg",
    "description": "30 gm"
  },
  {
    "id": 259,
    "name": "GEM-CD",
    "composition": "Beclomethasone Dipropionate, Clotrimazole & Neomycin Cream",
    "mrp": 79.0,
    "brand": "Madhav Labs",
    "image": "images/GEM-CD.jpg",
    "description": "15 gm"
  },
  {
    "id": 260,
    "name": "NEET GEL",
    "composition": "Nimesulide 10 mg, Capsaicin 0.25 mg, Menthol 50 mg, Methyl salicylate -100 mg Gel",
    "mrp": 99.0,
    "brand": "Madhav Labs",
    "image": "images/NEET_GEL.jpg",
    "description": "30 gm"
  },
  {
    "id": 261,
    "name": "NMC",
    "composition": "Clobetasol Propionate 0.05% w/w, Neomycin 0.5% w/w, Miconazole Nitrate 2% w/w Cream",
    "mrp": 89.0,
    "brand": "Madhav Labs",
    "image": "images/NMC.jpg",
    "description": "15 gm"
  },
  {
    "id": 262,
    "name": "ORFINE -IT",
    "composition": "Ofloxacin 0.75 w/w , Ornidazole 2% w/w, Itraconazole1 % w/w , Clobetasol propionate 0.05% w/w cream",
    "mrp": 95.0,
    "brand": "Madhav Labs",
    "image": "images/ORFINE_-IT.jpg",
    "description": "15 gm"
  },
  {
    "id": 263,
    "name": "PM",
    "composition": "Metronidazole, Povidone Iodine Ointment",
    "mrp": 89.0,
    "brand": "Madhav Labs",
    "image": "images/PM.jpg",
    "description": "15 gm"
  },
  {
    "id": 264,
    "name": "SIXER",
    "composition": "Capsicum 0.075% w/w, Methyl Salicylate 20% w/w, Menthol 10% w/w, Camphor 5%w/w, Eucalyptus Oil 5 w/w, Diclofenac Diethylamine 1.16% w/w cream",
    "mrp": 169.0,
    "brand": "Madhav Labs",
    "image": "images/SIXER_2.jpg",
    "description": "30 gm"
  },
  {
    "id": 265,
    "name": "SIXER ROLL ON",
    "composition": "Diclofenac Diethylamine 1.16% w/w, Linseed Oil 3.00%, Methyl Salicylate10.00% Menthol 5%w/w",
    "mrp": 199.0,
    "brand": "Madhav Labs",
    "image": "images/SIXER_ROLL_ON.jpg",
    "description": "50 gm"
  },
  {
    "id": 266,
    "name": "SIXER SPRAY",
    "composition": "Diclofenac Diethylamine 1.16% w/w, Linseed Oil 3.00%, Methyl Salicylate10.00%, Menthol 5% w/w",
    "mrp": 199.0,
    "brand": "Madhav Labs",
    "image": "images/SIXER_SPRAY.jpg",
    "description": "55 gm"
  },
  {
    "id": 267,
    "name": "TEE-2",
    "composition": "Mupirocin IP 2.0 % w/w ointment",
    "mrp": 113.62,
    "brand": "Madhav Labs",
    "image": "images/TEE-2.jpg",
    "description": "5 gm"
  },
  {
    "id": 268,
    "name": "Z KOOL",
    "composition": "Calcium Dobesilate 0.25% w/w\nLignocaine Hydrochloride 3.0%w/w\nHydrocortisone Acetate 0.25% , Zinc 5% w/w ",
    "mrp": 135.0,
    "brand": "Madhav Labs",
    "image": "images/Z_KOOL.jpg",
    "description": "30 gm"
  },
  {
    "id": 269,
    "name": "CAREDENT",
    "composition": "Potassium Nitrate (TOOTH PASTE)",
    "mrp": 95.0,
    "brand": "Madhav Labs",
    "image": "images/CAREDENT.jpg",
    "description": "50 gm"
  },
  {
    "id": 270,
    "name": "MOUDEN",
    "composition": "Chlorohexidine 0.2% w/w, Sodium Benzoate 0.2% w/w (MOUTH WASH)",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/MOUDEN.jpg",
    "description": "150 ml"
  },
  {
    "id": 271,
    "name": "CC-VIG",
    "composition": "Carboxymethyl Cellulose Sodium 0.5% W/V(Eye Drops)",
    "mrp": 89.0,
    "brand": "Madhav Labs",
    "image": "images/CC-VIG.jpg",
    "description": "10 ml"
  },
  {
    "id": 272,
    "name": "CCVIG -G",
    "composition": "Carboxymethyl Cellulose Sodium 0.5% w/v, Glycerin 0.5% w/v (Eye drops )",
    "mrp": 129.0,
    "brand": "Madhav Labs",
    "image": "images/CCVIG_-G.jpg",
    "description": "10 ml"
  },
  {
    "id": 273,
    "name": "EMVIN -P",
    "composition": "Xylometazoline 0.05% W/V (Paediatric) Nasal Drops (Dpco)",
    "mrp": 46.9,
    "brand": "Madhav Labs",
    "image": "images/EMVIN_-P.jpg",
    "description": "10 ml"
  },
  {
    "id": 274,
    "name": "EMVIN",
    "composition": "Xylometazoline Hcl 0.1% W/V (NASAL DROPS)(Dpco)",
    "mrp": 57.34,
    "brand": "Madhav Labs",
    "image": "images/EMVIN.jpg",
    "description": "10 ml"
  },
  {
    "id": 275,
    "name": "MOFCARE",
    "composition": "Ofloxacin 0.3% W/V (Eye/Ear Drops) (Dpco)",
    "mrp": 48.38,
    "brand": "Madhav Labs",
    "image": "images/MOFCARE.jpg",
    "description": "10 ml"
  },
  {
    "id": 276,
    "name": "MOX-AV",
    "composition": "Moxifloxacin 0.5% W/V (Eye Drops)",
    "mrp": 95.0,
    "brand": "Madhav Labs",
    "image": "images/MOX-AV.jpg",
    "description": "5 ml"
  },
  {
    "id": 277,
    "name": "MOX-LP",
    "composition": "Moxifloxacin 0.5% W/V , Lotoprednol 0.5%W/V Eye drops",
    "mrp": 195.0,
    "brand": "Madhav Labs",
    "image": "images/MOX-LP.jpg",
    "description": "5 ml"
  },
  {
    "id": 278,
    "name": "MOX-PD",
    "composition": "Moxifloxacin 0.5% W/V , Predinisolone 1 %W/V Eye drops",
    "mrp": 89.0,
    "brand": "Madhav Labs",
    "image": "images/MOX-PD.jpg",
    "description": "5 ml"
  },
  {
    "id": 279,
    "name": "MOZAS",
    "composition": "Mometasone Furoate 0.05% w/w Nasal Spray",
    "mrp": 325.0,
    "brand": "Madhav Labs",
    "image": "images/MOZAS.jpg",
    "description": "10 ml"
  },
  {
    "id": 280,
    "name": "CEFVIG",
    "composition": "Cefpodoxime Proxetil 50 mg Dry Syrup With Distilled Water",
    "mrp": 95.0,
    "brand": "Madhav Labs",
    "image": "images/CEFVIG.jpg",
    "description": "30 ml"
  },
  {
    "id": 281,
    "name": "CEFVIG-DS",
    "composition": "Cefpodoxime Proxetil 100 mg Dry Syp With Distilled Water",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/CEFVIG-DS.jpg",
    "description": "30 ml"
  },
  {
    "id": 282,
    "name": "EMTAX LB",
    "composition": "Cefixime 50mg, Lactic acid bacillus 60 Million spores Dry Syp With Dist Water",
    "mrp": 95.0,
    "brand": "Madhav Labs",
    "image": "images/EMTAX_LB.jpg",
    "description": "30 ml"
  },
  {
    "id": 283,
    "name": "EMTAX -OF",
    "composition": "Cefixime 50 mg , Ofloxacin 50 mg Dry Syp With Distilled Water",
    "mrp": 95.0,
    "brand": "Madhav Labs",
    "image": "images/EMTAX_-OF.jpg",
    "description": "30 ml"
  },
  {
    "id": 284,
    "name": "MOXSPEN- CL",
    "composition": "Amoxicillin 200 mg, Clavulanate Potassium 28.5 mg Dry Syp with distilled water",
    "mrp": 67.87,
    "brand": "Madhav Labs",
    "image": "images/MOXSPEN-_CL.jpg",
    "description": "30 ml"
  },
  {
    "id": 285,
    "name": "MOXSPEN -CL LB",
    "composition": "Amoxicillin 200 mg, Clavulanate Potassium 28.5 mg, Lactic acid bacillus Dry Syp with distilled water",
    "mrp": 89.0,
    "brand": "Madhav Labs",
    "image": "images/MOXSPEN_-CL_LB.jpg",
    "description": "30 ml"
  },
  {
    "id": 286,
    "name": "MOXSPEN CL DS",
    "composition": "Amoxycillin 400 mg, Clavulanate Potassium 57 mg dry syr with distilled water",
    "mrp": 145.0,
    "brand": "Madhav Labs",
    "image": "images/MOXSPEN_CL_DS.jpg",
    "description": "30 ml"
  },
  {
    "id": 287,
    "name": "PROFIT - BZ",
    "composition": "Prebiotic , Probiotic with B-complex & Zinc dry syr",
    "mrp": 119.0,
    "brand": "Madhav Labs",
    "image": "images/PROFIT_-_BZ.jpg",
    "description": "25 gm"
  },
  {
    "id": 288,
    "name": "EMLYTE -ZC",
    "composition": "Enriched with Vitamin C & Zinc Powder",
    "mrp": 79.0,
    "brand": "Madhav Labs",
    "image": "images/EMLYTE_-ZC.jpg",
    "description": "105 gm"
  },
  {
    "id": 289,
    "name": "EMLYTE -ZC",
    "composition": "Enriched with Dextrose , Vitamin C and Zinc Ready to drink",
    "mrp": 59.0,
    "brand": "Madhav Labs",
    "image": "images/EMLYTE_-ZC_2.jpg",
    "description": "200 ml"
  },
  {
    "id": 290,
    "name": "BOAT-MN (dpco)",
    "composition": "Meropenem 1000 mg INJ",
    "mrp": 1067.0,
    "brand": "Madhav Labs",
    "image": "images/BOAT-MN_(dpco).jpg",
    "description": "VIAL"
  },
  {
    "id": 291,
    "name": "DOLODIL",
    "composition": "Piroxicam 20 mg Inj",
    "mrp": 25.0,
    "brand": "Madhav Labs",
    "image": "images/DOLODIL.jpg",
    "description": "2 ml Amp BL"
  },
  {
    "id": 292,
    "name": "DECATOP - 25",
    "composition": "Nandrolone Decanoate 25 mg Inj",
    "mrp": 129.0,
    "brand": "Madhav Labs",
    "image": "images/DECATOP_-_25.jpg",
    "description": "1 ml Amp BL"
  },
  {
    "id": 293,
    "name": "DECATOP-50",
    "composition": "Nandrolone Decanoate 50 mg Inj",
    "mrp": 179.0,
    "brand": "Madhav Labs",
    "image": "images/DECATOP-50.jpg",
    "description": "1 ml Amp BL"
  },
  {
    "id": 294,
    "name": "EN-M",
    "composition": "Pantoprazole- 40 mg Inj",
    "mrp": 56.0,
    "brand": "Madhav Labs",
    "image": "images/EN-M_3.jpg",
    "description": "Vial"
  },
  {
    "id": 295,
    "name": "ESKA",
    "composition": "Triamcinolone Acetonide 40 mg Inj",
    "mrp": 89.0,
    "brand": "Madhav Labs",
    "image": "images/ESKA.jpg",
    "description": "1 ml Vial"
  },
  {
    "id": 296,
    "name": "LISEL – 250",
    "composition": "Ceftriaxone Sodium Sterile 250 mg Inj",
    "mrp": 31.74,
    "brand": "Madhav Labs",
    "image": "images/LISEL_–_250.jpg",
    "description": "Vial"
  },
  {
    "id": 297,
    "name": "LISEL – 500",
    "composition": "Ceftriaxone Sodium Sterile 500 mg Inj",
    "mrp": 56.06,
    "brand": "Madhav Labs",
    "image": "images/LISEL_–_500.jpg",
    "description": "Vial"
  },
  {
    "id": 298,
    "name": "LISEL – 1G",
    "composition": "Ceftriaxone Sodium Sterile1000 mg Inj",
    "mrp": 66.68,
    "brand": "Madhav Labs",
    "image": "images/LISEL_–_1G.jpg",
    "description": "Vial"
  },
  {
    "id": 299,
    "name": "LISEL - S 1.5",
    "composition": "Ceftriaxone Sodium 1000 mg, Sulbactam 500 mg Inj",
    "mrp": 180.0,
    "brand": "Madhav Labs",
    "image": "images/LISEL_-_S_1.5.jpg",
    "description": "Vial"
  },
  {
    "id": 300,
    "name": "NAL-M",
    "composition": "Diclofenac Sodium 75 mg Inj",
    "mrp": 20.0,
    "brand": "Madhav Labs",
    "image": "images/NAL-M.jpg",
    "description": "1 ml Amp BL"
  },
  {
    "id": 301,
    "name": "NAL-M",
    "composition": "Diclofenac Sodium 75 mg Inj",
    "mrp": 25.0,
    "brand": "Madhav Labs",
    "image": "images/NAL-M_2.jpg",
    "description": "1 ml Amp BL"
  },
  {
    "id": 302,
    "name": "NEUROVIG - M",
    "composition": "Mecobalamin 500 mcg Inj",
    "mrp": 23.0,
    "brand": "Madhav Labs",
    "image": "images/NEUROVIG_-_M.jpg",
    "description": "1 ml Amp BL"
  },
  {
    "id": 303,
    "name": "NEUROVIG-MD",
    "composition": "Methylcobalamin 1000 mcg, Nicotinamide 10 mg, Pyridoxine Hcl 100 mg Inj",
    "mrp": 79.0,
    "brand": "Madhav Labs",
    "image": "images/NEUROVIG-MD.jpg",
    "description": "2 ml Amp BL Syringe with Needle"
  },
  {
    "id": 304,
    "name": "PARK - 500",
    "composition": "Amikacin Sulphate 500 mg Inj",
    "mrp": 109.0,
    "brand": "Madhav Labs",
    "image": "images/PARK_-_500.jpg",
    "description": "Vial"
  },
  {
    "id": 305,
    "name": "Q-M",
    "composition": "Arteether 150 mg Inj",
    "mrp": 99.0,
    "brand": "Madhav Labs",
    "image": "images/Q-M.jpg",
    "description": "2 ml Amp"
  },
  {
    "id": 306,
    "name": "VOMIVEN",
    "composition": "Ondansetron 2 mg In( Dpco )",
    "mrp": 13.35,
    "brand": "Madhav Labs",
    "image": "images/VOMIVEN.jpg",
    "description": "2 ml Amp BL"
  },
  {
    "id": 307,
    "name": "FEP",
    "composition": "Paracetamol 1000 mg infusion",
    "mrp": 499.0,
    "brand": "Madhav Labs",
    "image": "images/FEP_3.jpg",
    "description": "100 ml"
  },
  {
    "id": 308,
    "name": "ALUBEST Cream",
    "composition": "Aloes & Vitamin-E (Cream)",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/ALUBEST_Cream.jpg",
    "description": "50 gm Tube Pack"
  },
  {
    "id": 309,
    "name": "ALUBEST Soap",
    "composition": "Glycerine, Alovera, Vit E, Liquid Paraffin Light, Olive Oil, Jojoba Oil 75 gms SOAP",
    "mrp": 95.0,
    "brand": "Madhav Labs",
    "image": "images/ALUBEST_Soap.jpg",
    "description": "75 gm"
  },
  {
    "id": 310,
    "name": "ALUBEST-TS",
    "composition": "Enriched with Aloe vera, Tulasi & Sandal",
    "mrp": 129.0,
    "brand": "Madhav Labs",
    "image": "images/ALUBEST-TS.jpg",
    "description": "75 gm"
  },
  {
    "id": 311,
    "name": "ALUBEST Lotion",
    "composition": "Aloes, Vitamin-E , Jojaba Oil , Squalene Lotion",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/ALUBEST_Lotion.jpg",
    "description": "100 ml Pet"
  },
  {
    "id": 312,
    "name": "ACKVIG",
    "composition": "Tea Tree Oil, Allantoin and Vit E Acetate Soap",
    "mrp": 119.0,
    "brand": "Madhav Labs",
    "image": "images/ACKVIG.jpg",
    "description": "75 gm"
  },
  {
    "id": 313,
    "name": "KEVIG",
    "composition": "Ketoconazole 2%, ZPTO 1 % Shampoo",
    "mrp": 189.0,
    "brand": "Madhav Labs",
    "image": "images/KEVIG.jpg",
    "description": "60 ml"
  },
  {
    "id": 314,
    "name": "KEVIG",
    "composition": "Ketoconazole 2% Soap",
    "mrp": 169.0,
    "brand": "Madhav Labs",
    "image": "images/KEVIG_2.jpg",
    "description": "75 gm"
  },
  {
    "id": 315,
    "name": "KRISH",
    "composition": "Papaya Soap with Aloe Vera, Honey and Cocoa Butter",
    "mrp": 129.0,
    "brand": "Madhav Labs",
    "image": "images/KRISH.jpg",
    "description": "100 gm"
  },
  {
    "id": 316,
    "name": "M DERM-6",
    "composition": "ktoconazole 20mg, Iodohloehydeoxyquinoline 10mg, Tolnaftat, Neomycin sulphate, clobetasol propionate & Dexpanthenol Ointment",
    "mrp": 110.0,
    "brand": "Madhav Labs",
    "image": "images/M_DERM-6.jpg",
    "description": "15 gm"
  },
  {
    "id": 317,
    "name": "LUNAC",
    "composition": "Luliconazole 1 % Cream",
    "mrp": 199.0,
    "brand": "Madhav Labs",
    "image": "images/LUNAC.jpg",
    "description": "20 gm"
  },
  {
    "id": 318,
    "name": "PERLIS",
    "composition": "Permethrin Soap Noodle Base",
    "mrp": 149.0,
    "brand": "Madhav Labs",
    "image": "images/PERLIS.jpg",
    "description": "75 gms"
  },
  {
    "id": 319,
    "name": "M95 ZC-500",
    "composition": "Vitamin C - 500 mg, Vitamin D3 - 1000 I.U, Zinc Sulphate 10 mg ChewableTablets",
    "mrp": 1350.0,
    "brand": "Madhav Labs",
    "image": "images/M95_ZC-500.jpg",
    "description": "10 X 15 AA"
  },
  {
    "id": 320,
    "name": "ZINKOVIG",
    "composition": "Multivitamins, Multiminerals with Zinc and Grape seed extract Tablets",
    "mrp": 1200.0,
    "brand": "Madhav Labs",
    "image": "images/ZINKOVIG.jpg",
    "description": "5 X 2 X 15 AA"
  }

];

// Cart array to store selected medicines with scheme and quantity
let cart = [];

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayMedicines();
    updateCartCount();
    
    // Add search functionality on Enter key and real-time search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchMedicines();
        }
    });
    
    // Real-time search as you type
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const clearSearchBtn = document.getElementById('clearSearchBtn');
        
        if (searchTerm === '') {
            displayMedicines();
            clearSearchBtn.style.display = 'none';
        } else {
            const filteredMedicines = medicines.filter(medicine => matchesAtWordStarts(medicine, searchTerm));
            
            displayMedicinesList(filteredMedicines);
            clearSearchBtn.style.display = 'inline-block';
        }
    });

    // Hide keyboard on scroll or touch
    const blurSearch = () => {
        if (document.activeElement === searchInput) {
            searchInput.blur();
        }
    };
    window.addEventListener('scroll', blurSearch, { passive: true });
    window.addEventListener('touchstart', blurSearch, { passive: true });
});

// Match query at the start of any word in name or composition
function matchesAtWordStarts(medicine, query) {
    if (!query) return true;
    const normalizedQuery = query.toLowerCase();
    const fields = [medicine.name || '', medicine.composition || ''];
    for (const field of fields) {
        const words = field.toLowerCase().split(/\s+/).filter(Boolean);
        // Also consider hyphenated or slashed compounds as separate word starts
        const subWords = words.flatMap(w => w.split(/[\-\/]+/));
        if (subWords.some(w => w.startsWith(normalizedQuery))) {
            return true;
        }
    }
    return false;
}

// Determine mrp unit label based on description content
function getPriceUnitLabel(medicine) {
    try {
        const desc = (medicine && medicine.description) ? String(medicine.description) : '';
        if (desc.toLowerCase().includes('ml')) return 'per bottle';
    } catch (e) {}
    return 'per box';
}

// Check if description includes ml
function descriptionHasMl(description) {
    return (description || '').toLowerCase().includes('ml');
}

// Extract first number before 'x' or 'X' in description (e.g., "20 x 10 ST" -> 20)
function getFirstNumberBeforeX(description) {
    const match = (description || '').match(/(\d+)\s*[xX]/);
    return match ? parseInt(match[1], 10) : null;
}

// Build per-strip label only when no ml is present
function getPerStripLabel(medicine) {
    if (!medicine) return '';
    const desc = medicine.description || '';
    if (descriptionHasMl(desc)) return '';
    const divisor = getPerStripDivisorFromDescription(desc);
    if (!divisor || divisor <= 0) return '';
    const perStrip = medicine.mrp / divisor;
    return ` <small>(₹${perStrip.toFixed(2)} per strip)</small>`;
}

// Get divisor for per-strip: first number before 'x' if one 'x', else product of first two numbers if two 'x'
function getPerStripDivisorFromDescription(description) {
    const nums = (description || '').match(/\d+/g);
    if (!nums || nums.length === 0) return null;
    // Identify count of 'x' separators to infer structure like a x b x c
    const xCount = ((description || '').match(/[xX]/g) || []).length;
    const a = parseInt(nums[0], 10);
    if (isNaN(a) || a <= 0) return null;
    if (xCount >= 2 && nums.length >= 2) {
        const b = parseInt(nums[1], 10);
        if (isNaN(b) || b <= 0) return a; // fallback to first
        return a * b;
    }
    return a;
}

// Display all medicines in the grid
function displayMedicines() {
    displayMedicinesList(medicines);
}

// Display filtered medicines
function displayMedicinesList(medicinesToShow) {
    const medicinesGrid = document.getElementById('medicinesGrid');
    medicinesGrid.innerHTML = '';

    if (medicinesToShow.length === 0) {
        medicinesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No medicines found</h3>
                <p>Try adjusting your search terms</p>
            </div>
        `;
        return;
    }

    medicinesToShow.forEach(medicine => {
        const medicineCard = createMedicineCard(medicine);
        medicinesGrid.appendChild(medicineCard);
    });
}

// Search medicines function (for manual search button)
function searchMedicines() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    
    if (searchTerm === '') {
        displayMedicines();
        clearSearchBtn.style.display = 'none';
        return;
    }
    
    const filteredMedicines = medicines.filter(medicine => matchesAtWordStarts(medicine, searchTerm));
    
    displayMedicinesList(filteredMedicines);
    clearSearchBtn.style.display = 'inline-block';
    
    // Focus back to search input for better UX
    searchInput.focus();
}

// Clear search function
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearchBtn').style.display = 'none';
    displayMedicines();
}

// Quantity control on product card
function changeQty(medicineId, delta) {
    const input = document.getElementById(`quantity-${medicineId}`);
    if (!input) return;
    const current = parseInt(input.value) || 0;
    const next = Math.max(1, Math.min(999, current + delta));
    input.value = next;
}

// Quantity control in cart - delta change
function cartChangeQty(medicineId, delta) {
    const item = cart.find(i => i.id === medicineId);
    if (!item) return;
    item.quantity = Math.max(1, Math.min(999, (item.quantity || 1) + delta));
    updateCartCount();
    updateCartDisplay();
}

// Quantity control in cart - set explicit value
function cartSetQty(medicineId, value) {
    const item = cart.find(i => i.id === medicineId);
    if (!item) return;
    let num = parseInt(value);
    if (isNaN(num) || num < 1) num = 1;
    if (num > 999) num = 999;
    item.quantity = num;
    updateCartCount();
    updateCartDisplay();
}

// Create a medicine card element
function createMedicineCard(medicine) {
    const card = document.createElement('div');
    card.className = 'medicine-card';
    
    card.innerHTML = `
        <div class="medicine-image">
            <img src="${medicine.image}" alt="${medicine.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="medicine-image-placeholder" style="display: none;">
                💊
            </div>
        </div>
        <div class="medicine-info">
            <div class="medicine-name">${medicine.name}</div>
            <div class="medicine-composition">${medicine.composition}</div>
            <div class="medicine-mrp">MRP: ₹${medicine.mrp} <small>(${getPriceUnitLabel(medicine)})</small></div>
            <div class="medicine-scheme">
                ${(() => {
                    const billingPrice = (medicine.mrp * 0.9).toFixed(2);
                    let out = `Billing Price: ₹${billingPrice}`;
                    if (medicine.description) {
                        out += `<div class=\"medicine-description\">${medicine.description}${getPerStripLabel(medicine)}</div>`;
                    }
                    return out;
                })()}
            </div>
            <div class="medicine-quantity">
                <label for="quantity-${medicine.id}">Quantity:</label>
                <div class="qty-control">
                    <button type="button" class="qty-btn" onclick="changeQty(${medicine.id}, -1)">−</button>
                    <input type="number" id="quantity-${medicine.id}" class="quantity-input" value="1" min="1" max="999">
                    <button type="button" class="qty-btn" onclick="changeQty(${medicine.id}, 1)">+</button>
                </div>
            </div>
            <div class="medicine-brand">${medicine.brand}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${medicine.id})">
                Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

// Add medicine to cart
function addToCart(medicineId) {
    const medicine = medicines.find(m => m.id === medicineId);
    if (medicine) {
        const quantity = parseInt(document.getElementById(`quantity-${medicineId}`).value);
        
        if (quantity < 1) {
            showNotification('Please enter a valid quantity!', 'error');
            return;
        }
        
        // Check if medicine is already in cart
        const existingItem = cart.find(item => item.id === medicineId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                ...medicine, 
                quantity: quantity
            });
        }
        
        updateCartCount();
        showNotification(`${medicine.name} added to cart!`, 'success');
    }
}

// Remove medicine from cart
function removeFromCart(medicineId) {
    cart = cart.filter(item => item.id !== medicineId);
    updateCartCount();
    updateCartDisplay();
}

// Update cart count display
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.length;
    cartCount.textContent = totalItems;
}

// Open cart modal
function openCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'block';
    updateCartDisplay();
}

// Close cart modal
function closeCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'none';
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const totalItems = document.getElementById('totalItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        totalItems.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = '';
    let totalQuantity = 0;
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.mrp * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="medicine-image-placeholder" style="display: none;">
                    💊
                </div>
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-composition">${item.composition}</div>
                <div class="cart-item-mrp">MRP: ₹${item.mrp} <small>(${getPriceUnitLabel(item)})</small> <span class="cart-item-brand">${item.brand}</span></div>
                <div class="cart-item-qty">Qty: 
                    <div class="qty-control">
                        <button type="button" class="qty-btn" onclick="cartChangeQty(${item.id}, -1)">−</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="999" onchange="cartSetQty(${item.id}, this.value)">
                        <button type="button" class="qty-btn" onclick="cartChangeQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    totalItems.textContent = cart.length;
    
    // Update total mrp display
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.textContent = `₹${totalPrice}`;
    }
}

// Place order and redirect to WhatsApp
function placeOrder() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Create order message
    let orderMessage = `🏥 *${CONFIG.companyName.toUpperCase()} - MEDICINE ORDER* 🏥\n\n`;
    orderMessage += "Please find my order details below:\n\n";
    
    cart.forEach((item, index) => {
        orderMessage += `${index + 1}. *${item.name}* (Composition: ${item.composition})\n`;
        orderMessage += `   MRP: ₹${item.mrp}\n`;
        orderMessage += `   Billing Price: ₹${(item.mrp * 0.9).toFixed(2)}\n`;
        orderMessage += `   Quantity: ${item.quantity}\n\n`;
    });
    
    orderMessage += CONFIG.whatsappMessage.footer;
    
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(orderMessage);
    
    // WhatsApp business number - get from config file
    const whatsappNumber = CONFIG.whatsappNumber;
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Clear cart after order
    cart = [];
    updateCartCount();
    closeCart();
    showNotification('Order placed successfully! Redirecting to WhatsApp...', 'success');
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification - positioned to not block cart button
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'error' ? '#e74c3c' : type === 'success' ? '#27ae60' : '#667eea'};
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 250px;
        word-wrap: break-word;
        font-size: 0.9rem;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 2 seconds (faster)
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        closeCart();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCart();
    }
});
