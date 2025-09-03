// Sample medicine data - you can replace this with your actual medicine database
const medicines = [
  {
    "id": 1, 
    "name": "ABDAL", 
    "brand": "Aceclofenac 100 mg Tab", 
    "price": 900.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "20 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL.jpg"
  }, 
  {
    "id": 2, 
    "name": "ABDAL PLUS", 
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg Tab (BLISTER)", 
    "price": 1000.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL_PLUS.jpg"
  }, 
  {
    "id": 3, 
    "name": "ABDAL PLUS", 
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg Tab (ALU ALU)", 
    "price": 690.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL_PLUS_2.jpg"
  }, 
  {
    "id": 4, 
    "name": "ABDAL - CZ", 
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg, Chloroxazone 250 mg Tab (Blister)", 
    "price": 790.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL_-_CZ.jpg"
  }, 
  {
    "id": 5, 
    "name": "ABDAL - CZ", 
    "brand": "Aceclofenac 100 mg, Paracetamol 325mg, Chloroxazone 250 mg Tab(Alu Alu)", 
    "price": 890.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL_-_CZ_2.jpg"
  }, 
  {
    "id": 6, 
    "name": "ABDAL CZ-500", 
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg, Chloroxazone 500 mg Tab", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL_CZ-500.jpg"
  }, 
  {
    "id": 7, 
    "name": "ABDAL - SP", 
    "brand": "Aceclofenac 100 mg Paracetamol 325 mg, Serratiopeptidase 10 mg Tab", 
    "price": 850.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL_-_SP.jpg"
  }, 
  {
    "id": 8, 
    "name": "ABDAL - SP", 
    "brand": "Aceclofenac 100 mg Paracetamol 325 mg, Serratiopeptidase 10 mg Tab (New attactive pack with barcode)", 
    "price": 900.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 BL With barcode"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL_-_SP_2.jpg"
  }, 
  {
    "id": 9, 
    "name": "ABDAL - SP 15", 
    "brand": "Aceclofenac 100 mg Paracetamol 325 mg, Serratiopeptidase 15 mg Tab", 
    "price": 950.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL_-_SP_15.jpg"
  }, 
  {
    "id": 10, 
    "name": "ABDAL-RZ", 
    "brand": "Aceclofenac 200 mg (SR), Rabeprazole 20 mg (EC) Caps", 
    "price": 1000.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL-RZ.jpg"
  }, 
  {
    "id": 11, 
    "name": "ABDAL-TS4", 
    "brand": "Aceclofenac 100 mg, Thiocolchicoside 4 mg Tab", 
    "price": 1900.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL-TS4.jpg"
  }, 
  {
    "id": 12, 
    "name": "ABDAL-TSP4", 
    "brand": "Aceclofenac 100mg, Paracetamol 325 mg, Thiocolchicoside 4 mg Tabs", 
    "price": 1990.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL-TSP4.jpg"
  }, 
  {
    "id": 13, 
    "name": "ADLOR +", 
    "brand": "Lornoxicam 8 mg, Paracetamol 325 mg Tab", 
    "price": 1000.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ADLOR_+.jpg"
  }, 
  {
    "id": 14, 
    "name": "AZVIG -100 DT", 
    "brand": "Azithromycin 100 mg Dispersible Tab", 
    "price": 790.0, 
    "schemes": [
      {
        "name": "NO OFFER", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AZVIG_-100_DT.jpg"
  }, 
  {
    "id": 15, 
    "name": "AZVIG - 250", 
    "brand": "Azithromycin 250 mg Tab (Dpco )", 
    "price": 1565.6, 
    "schemes": [
      {
        "name": "NO OFFER", 
        "description": "20 X 6 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AZVIG_-_250.jpg"
  }, 
  {
    "id": 16, 
    "name": "AZVIG - 250 LB", 
    "brand": "Azithromycin 250 mg with Lactic Acid Bacillus 2.5 Billion Spores Tabs", 
    "price": 1350.0, 
    "schemes": [
      {
        "name": "NO OFFER", 
        "description": "15 X 6 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AZVIG_-_250_LB.jpg"
  }, 
  {
    "id": 17, 
    "name": "AZVIG - 500", 
    "brand": "Azithromycin 500 mg Tab  (Dpco)", 
    "price": 2382.3, 
    "schemes": [
      {
        "name": "NO OFFER", 
        "description": "3 X 6 X 5 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AZVIG_-_500.jpg"
  }, 
  {
    "id": 18, 
    "name": "AZVIG - 500 LB", 
    "brand": "Azithromycin 500 mg with Lactic Acid Bacillus 2.5 Billion Spores Tabs", 
    "price": 2610.0, 
    "schemes": [
      {
        "name": "NO OFFER", 
        "description": "3 X 6 X 5 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AZVIG_-_500_LB.jpg"
  }, 
  {
    "id": 19, 
    "name": "BAT-250", 
    "brand": "Levofloxacin 250 mg Tab (Dpco)", 
    "price": 533.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/BAT-250.jpg"
  }, 
  {
    "id": 20, 
    "name": "BAT-500", 
    "brand": "Levofloxacin 500 mg Tab (Dpco)", 
    "price": 1024.8, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/BAT-500.jpg"
  }, 
  {
    "id": 21, 
    "name": "BEFOL 100", 
    "brand": "Carbonyl iron, Folic Acid, Vitamin B12 and Zinc Caps", 
    "price": 900.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "5 X 2 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/BEFOL_100.jpg"
  }, 
  {
    "id": 22, 
    "name": "BETAVIG-8", 
    "brand": "Betahistine 8 mg Tabs", 
    "price": 600.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/BETAVIG-8.jpg"
  }, 
  {
    "id": 23, 
    "name": "BAKEM- 20", 
    "brand": "Baclofen 20 mg Tabs  (Dpco)", 
    "price": 1709.4, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/BAKEM-_20.jpg"
  }, 
  {
    "id": 24, 
    "name": "BLAST", 
    "brand": "Bromhexin hydrochloride IP 8 mg, Guaiphensin ip 50 mg, Phenylepherine hydrochloride 5 mg, Cpm 2 mg, Paracetamol 325 mg Tab", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "20 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/BLAST.jpg"
  }, 
  {
    "id": 25, 
    "name": "BONVIG K2-7", 
    "brand": "Calcitriol 0.25 mcg, Calcium Citrate Maleate 500mg, Vitamin K2-7 45 mcg, Methylcobalamin 1500 mcg, Zinc 7.5 mg, Magnesium 20 mg, L -Methyl Folate 800 mcg Soft Gel Caps", 
    "price": 1900.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 1 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/BONVIG_K2-7.jpg"
  }, 
  {
    "id": 26, 
    "name": "CALSPAN-500", 
    "brand": "Oyster Calcium , Vitamin D3 250 IU, Carbonate 1250 mg, Elemental Calcium 500 mg Tab", 
    "price": 590.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CALSPAN-500.jpg"
  }, 
  {
    "id": 27, 
    "name": "CALSPAN-DBL", 
    "brand": "Calcium Dobesilate 500 mg Capsules", 
    "price": 1690.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 1 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CALSPAN-DBL.jpg"
  }, 
  {
    "id": 28, 
    "name": "CALSPAN - M", 
    "brand": "Calcium, Vitamin D3 with Minerals Tab", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "5 X 2 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CALSPAN_-_M.jpg"
  }, 
  {
    "id": 29, 
    "name": "CALSPAN- MOM", 
    "brand": "Calcium Citrate Maleate 250mg, Vitamin D3 100 IU, Folic acid 50 mcg Tabs", 
    "price": 810.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "3 X 1 X 30 Bott pack"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CALSPAN-_MOM.jpg"
  }, 
  {
    "id": 30, 
    "name": "CALSPAN PLUS", 
    "brand": "Cyanocobalamin 1 mcg, calcium carbonate 500 mg, vitamin D3 200 IU , Folic acid 200 mcg, Pyridoxine HCL 2mg Softgel caps", 
    "price": 1700.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10  X 1 X  10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CALSPAN_PLUS.jpg"
  }, 
  {
    "id": 31, 
    "name": "CALSPAN -MFD3", 
    "brand": "Calcium carbonate 1250mg , Vitamin D3 2000IU , Magnjesium 240 mg , Zinc 11mg, Methylcobalamin 1500 mcg, L-methylfolate calcium 1 mg and Pyridoxal 5 Phosphate 20 mg Tab \n", 
    "price": 1900.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CALSPAN_-MFD3.jpg"
  }, 
  {
    "id": 32, 
    "name": "CALSPAN -CT", 
    "brand": "Calcium carbonate 1250 mg Eq .to Elemental calcium 500 mg , Calcitrol 0.25 mcg", 
    "price": 2550.0, 
    "schemes": [
      {
        "name": "5 + 4", 
        "description": "10 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CALSPAN_-CT.jpg"
  }, 
  {
    "id": 33, 
    "name": "CCM -V3", 
    "brand": "Clindamycin Phosphate 100 mg , Clotrimazole 200 mg soft gel caps", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 1 X 3 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CCM_-V3.jpg"
  }, 
  {
    "id": 34, 
    "name": "CANVIG-100", 
    "brand": "Itraconazole 100 mg Caps", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 1 X 7 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CANVIG-100.jpg"
  }, 
  {
    "id": 35, 
    "name": "COVIG Q", 
    "brand": "Coenzyme Q 10 100 mg (Softgel caps)", 
    "price": 4900.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 1 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/COVIG_Q.jpg"
  }, 
  {
    "id": 36, 
    "name": "CEFVIG-100 DT", 
    "brand": "Cefpodoxime Proxetil 100 mg Dispersible Tab", 
    "price": 1500.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CEFVIG-100_DT.jpg"
  }, 
  {
    "id": 37, 
    "name": "CEFVIG-200 DT", 
    "brand": "Cefpodoxime Proxetil 200 mg Dispersible Tab", 
    "price": 2400.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 1 X 10AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CEFVIG-200_DT.jpg"
  }, 
  {
    "id": 38, 
    "name": "CEFVIG- OF", 
    "brand": "Cefpodoxime Proxetil 200 mg, Ofloxacin 200 mg Tab", 
    "price": 1300.0, 
    "schemes": [
      {
        "name": "8 + 1", 
        "description": "5 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CEFVIG-_OF.jpg"
  }, 
  {
    "id": 39, 
    "name": "CEFVIG CL 325", 
    "brand": "Cefpodoxime Proxetil 200 mg, Clavulanate Potassium 125 mg Tab", 
    "price": 2160.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 6 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CEFVIG_CL_325.jpg"
  }, 
  {
    "id": 40, 
    "name": "DJ-5", 
    "brand": "Desloratadine 5 mg Tabs", 
    "price": 900.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DJ-5.jpg"
  }, 
  {
    "id": 41, 
    "name": "DJMN", 
    "brand": "Desloratadine 5 mg, Montelukast 10 mg Tabs", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DJMN.jpg"
  }, 
  {
    "id": 42, 
    "name": "D-TUSS", 
    "brand": "Dextromethorphan hydrobromide10 mg, Chloropheniramine maleate 2 mg, Phenylephrine Hydrochloride 5mg Softgel Caps", 
    "price": 600.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 1 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/D-TUSS.jpg"
  }, 
  {
    "id": 43, 
    "name": "DNVIG-510", 
    "brand": "Naproxen 500 mg, Domperidone 10 mg Tabs", 
    "price": 2250.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 15 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DNVIG-510.jpg"
  }, 
  {
    "id": 44, 
    "name": "DOLODIL TAB", 
    "brand": "Piroxicam 20 mg DispersibleTab", 
    "price": 780.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DOLODIL_TAB.jpg"
  }, 
  {
    "id": 45, 
    "name": "DSQ-CA", 
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg, Cetirizine Dihydrochloride 10 mg, Phenylephrine Hydrochloride 5mg, Caffeine (Anhydrous) 25 mg Tabs", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DSQ-CA.jpg"
  }, 
  {
    "id": 46, 
    "name": "DRAT - MF", 
    "brand": "Drotavarine 80 mg, Mefenamic acid 250 mg Tab", 
    "price": 890.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DRAT_-_MF.jpg"
  }, 
  {
    "id": 47, 
    "name": "EBAVIG -10", 
    "brand": "Ebastine 10 mg Tabs", 
    "price": 890.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EBAVIG_-10.jpg"
  }, 
  {
    "id": 48, 
    "name": "EBEX - 400 PLUS", 
    "brand": "Albendazole 400 mg, Ivermectin 6 mg Tab", 
    "price": 1440.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "20 X 3 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EBEX_-_400_PLUS.jpg"
  }, 
  {
    "id": 49, 
    "name": "EMDOX – LB", 
    "brand": "Doxycycline 100 mg, Lactic Acid Bacillus spores Caps", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10  X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMDOX_–_LB.jpg"
  }, 
  {
    "id": 50, 
    "name": "EMROX - 150", 
    "brand": "Roxithromycin 150 mg Tab", 
    "price": 1600.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMROX_-_150.jpg"
  }, 
  {
    "id": 51, 
    "name": "EMTAX-100 DT", 
    "brand": "Cefixime 100 mg DispersibleTab", 
    "price": 890.0, 
    "schemes": [
      {
        "name": " 10 + 1 \n ", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMTAX-100_DT.jpg"
  }, 
  {
    "id": 52, 
    "name": "EMTAX-200 DT", 
    "brand": "Cefixime 200 mg DispersibleTab  (Dpco)", 
    "price": 1095.3, 
    "schemes": [
      {
        "name": "15 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMTAX-200_DT.jpg"
  }, 
  {
    "id": 53, 
    "name": "EMTAX- 200 LB", 
    "brand": "Cefixime 200 mg, Lactic Acid Bacillus 60 Million spores Tab", 
    "price": 1600.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMTAX-_200_LB.jpg"
  }, 
  {
    "id": 54, 
    "name": "EMTAX-200 DT LB", 
    "brand": "Cefixime 200 mg Lactic Acid Bacillus 60 mg DispersibleTab", 
    "price": 1600.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMTAX-200_DT_LB.jpg"
  }, 
  {
    "id": 55, 
    "name": "EMTAX-AZL", 
    "brand": "Cefixime 200 mg, Azithromycin 250, Lactic acid Bacillus 60 million spores Tabs", 
    "price": 2990.0, 
    "schemes": [
      {
        "name": "NO OFFER", 
        "description": "10 X  10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMTAX-AZL.jpg"
  }, 
  {
    "id": 56, 
    "name": "EMTAX - OF", 
    "brand": "Cefixime 200 mg, Ofloxacin 200 mgTab", 
    "price": 2000.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "10  X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMTAX_-_OF.jpg"
  }, 
  {
    "id": 57, 
    "name": "EMTAX - CL 325", 
    "brand": "Cefixime 200 mg, Clavulanate Potassium 125 mg Tab", 
    "price": 2160.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 6 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMTAX_-_CL_325.jpg"
  }, 
  {
    "id": 58, 
    "name": "EMZOLID-600", 
    "brand": "Linezolid 600 mg Tab (Dpco)", 
    "price": 2438.6, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 1 X 6 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMZOLID-600.jpg"
  }, 
  {
    "id": 59, 
    "name": "EN-M", 
    "brand": "Pantoprazole 40 mg Tab", 
    "price": 1050.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 15 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EN-M.jpg"
  }, 
  {
    "id": 60, 
    "name": "EN-M", 
    "brand": "Pantoprazole 40 mg Tab", 
    "price": 1350.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 15 AA Aristro pack"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EN-M_2.jpg"
  }, 
  {
    "id": 61, 
    "name": "EN-D", 
    "brand": "Pantoprazole 20 mg, Domperidone 10 mg Tab", 
    "price": 790.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EN-D.jpg"
  }, 
  {
    "id": 62, 
    "name": "EN-D", 
    "brand": "Pantoprazole 20 mg, Domperidone 10 mg Tab", 
    "price": 1425.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 15 AA (Numbering base foil)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EN-D_2.jpg"
  }, 
  {
    "id": 63, 
    "name": "EN-DSR", 
    "brand": "Pantoprazole 40 mg, Domperidone 30 mg SR Caps (STRIP)", 
    "price": 1050.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EN-DSR.jpg"
  }, 
  {
    "id": 64, 
    "name": "EN-DSR", 
    "brand": "Pantoprazole 40 mg, Domperidone 30 mg SR Caps (ALU - ALU)", 
    "price": 1100.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EN-DSR_2.jpg"
  }, 
  {
    "id": 65, 
    "name": "EN-DSR", 
    "brand": "Pantoprazole 40 mg, Domperidone 30 mg SR Caps (ALU - ALU)", 
    "price": 1950.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 15 AA Alkem pack"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EN-DSR_3.jpg"
  }, 
  {
    "id": 66, 
    "name": "EN-M LP", 
    "brand": "Pantoprazole 40 mg, Levosulpride-75 mg SR Caps", 
    "price": 1900.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EN-M_LP.jpg"
  }, 
  {
    "id": 67, 
    "name": "EZEM-O3", 
    "brand": "Natural vitamin E 400 IU, Omega 3 fatty acid 30 mg, Wheat Germ Oil 100 mg Soft Gel Caps", 
    "price": 1530.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "3 X 3 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EZEM-O3.jpg"
  }, 
  {
    "id": 68, 
    "name": "FEP - 650", 
    "brand": "Paracetamol 650 mg Tab (Dpco)", 
    "price": 335.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/FEP_-_650.jpg"
  }, 
  {
    "id": 69, 
    "name": "FEP 650 -PLUS", 
    "brand": "Paracetamol 650 Mg , Phenylephrine Hydrochloride 5 Mg , Chlorpheniramine Maleate 2mg , Caffine 25mg Tab", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/FEP_650_-PLUS.jpg"
  }, 
  {
    "id": 70, 
    "name": "FTOL - 12", 
    "brand": "Folic Acid 5 mg, Vit.B12 15 mcg Tab", 
    "price": 300.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/FTOL_-_12.jpg"
  }, 
  {
    "id": 71, 
    "name": "FTOL-SG", 
    "brand": "Folic acid 5 mg, DHA 200 mg, Vit. B12 1 mcg soft gel caps", 
    "price": 1150.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 1 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/FTOL-SG.jpg"
  }, 
  {
    "id": 72, 
    "name": "4G PLUS", 
    "brand": "Omega-3 fatty Acids 90 mg, Green Tea Extract 10 mg, Ginkgo biloba 10 mg, Ginseng 42.5 mg, Grape seed extract, Antioxidants, Vitamins, Minerals , Trace Elements Softgel Caps", 
    "price": 1900.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 1 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/4G_PLUS.jpg"
  }, 
  {
    "id": 73, 
    "name": "GEFPLUS", 
    "brand": "Mefanamic Acid 250 mg, Paracetamol 325 mg Tab", 
    "price": 900.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GEFPLUS.jpg"
  }, 
  {
    "id": 74, 
    "name": "GEFSPAS", 
    "brand": "Mefanamic Acid 250 mg, Dicyclomine HCL 10 mg Tab", 
    "price": 900.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "5 X 4 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GEFSPAS.jpg"
  }, 
  {
    "id": 75, 
    "name": "GEXIN – 250 DT", 
    "brand": "Cephalexin 250 mg DispersibleTab", 
    "price": 1400.0, 
    "schemes": [
      {
        "name": "8 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GEXIN_–_250_DT.jpg"
  }, 
  {
    "id": 76, 
    "name": "GEXIN – 500", 
    "brand": "Cephalexin 500 mg Caps", 
    "price": 2400.0, 
    "schemes": [
      {
        "name": "8 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GEXIN_–_500.jpg"
  }, 
  {
    "id": 77, 
    "name": "GM- 17", 
    "brand": "Ginseng 42.5 mg , Multivitamin & Multiminerals Softgel Caps", 
    "price": 950.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 1 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GM-_17.jpg"
  }, 
  {
    "id": 78, 
    "name": "H CLOX-500", 
    "brand": "Ampicillin 250mg, Dicloxacillin 250mg Caps", 
    "price": 1400.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/H_CLOX-500.jpg"
  }, 
  {
    "id": 79, 
    "name": "HYZOK PLUS", 
    "brand": "Nimesulide 100 mg, Chloroxazone 250mg Tab", 
    "price": 1800.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/HYZOK_PLUS.jpg"
  }, 
  {
    "id": 80, 
    "name": "IBM-D3", 
    "brand": "Benfotiamine 150 mg, Inositol 100 mg, Methylcobalamin 1500 mcg, Vitamin D3 2000 IU, Alpha Lipoic acid 100 mg, Chromium Chloride 200 mcg, Sodium                selenite 55 mcg, Folic acid 1.5 mg Tabs", 
    "price": 1620.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "6 X 1 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/IBM-D3.jpg"
  }, 
  {
    "id": 81, 
    "name": "KLIME –250", 
    "brand": "Cefuroxime Axetil 250 mg Tabs", 
    "price": 2800.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/KLIME_–250.jpg"
  }, 
  {
    "id": 82, 
    "name": "KLIME –500", 
    "brand": "Cefuroxime Axetil 500 mg Tab", 
    "price": 2880.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "5 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/KLIME_–500.jpg"
  }, 
  {
    "id": 83, 
    "name": "KLIME CL - 375", 
    "brand": "Cefuroxime Axetil 250 mg, Clavulanate Potassium 125 mg Tab", 
    "price": 2980.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "10 X 6 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/KLIME_CL_-_375.jpg"
  }, 
  {
    "id": 84, 
    "name": "LAK-M DT", 
    "brand": "Lactic Acid Bacillus 100 Million Spores Tab", 
    "price": 400.0, 
    "schemes": [
      {
        "name": "2 + 3 New 2 + 1", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LAK-M_DT.jpg"
  }, 
  {
    "id": 85, 
    "name": "LYCET - 5", 
    "brand": "Levocetirizine 5 mg Tab", 
    "price": 390.0, 
    "schemes": [
      {
        "name": "4 + 2", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYCET_-_5.jpg"
  }, 
  {
    "id": 86, 
    "name": "LYCET - SG", 
    "brand": "Levocetirizine 5 mg Soft gel caps", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "2 + 4", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYCET_-_SG.jpg"
  }, 
  {
    "id": 87, 
    "name": "LYCET - MN KID", 
    "brand": "Levocetirizine 2.5 mg, Montelukast 4 mg Tab", 
    "price": 650.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYCET_-_MN_KID.jpg"
  }, 
  {
    "id": 88, 
    "name": "LYCET - MN", 
    "brand": "Levocetirizine 5 mg, Montelukast 10 mg Tab", 
    "price": 1100.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYCET_-_MN.jpg"
  }, 
  {
    "id": 89, 
    "name": "LYCET - MN", 
    "brand": "Levocetirizine 5 mg, Montelukast 10 mg Tab", 
    "price": 2100.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 1 X 15 AA Aristo pack"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYCET_-_MN_2.jpg"
  }, 
  {
    "id": 90, 
    "name": "LYCET-SG MN", 
    "brand": "Levocetirizine 5 mg, Montelukast 10 mg Soft gel caps", 
    "price": 1400.0, 
    "schemes": [
      {
        "name": "2 + 4", 
        "description": "10 X 1 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYCET-SG_MN.jpg"
  }, 
  {
    "id": 91, 
    "name": "LYCET-MNB", 
    "brand": "Levocetirizine 5 m, Montelukast 10 mg, Ambroxol 75 mg Tab", 
    "price": 1400.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYCET-MNB.jpg"
  }, 
  {
    "id": 92, 
    "name": "LYCET-XL +", 
    "brand": "Ambroxol 60 mg, Paracetamol 325 mg, Phenylephrine 5mg, Cetirizine 5mg Tabs", 
    "price": 690.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYCET-XL_+.jpg"
  }, 
  {
    "id": 93, 
    "name": "M RAL FORTE", 
    "brand": "Trypsin Chymotrypsin (100000AU) Tabs", 
    "price": 3800.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 20 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M_RAL_FORTE.jpg"
  }, 
  {
    "id": 94, 
    "name": "MAYO- 60K S", 
    "brand": "Cholecalciferol 60K IU Softgel Cap", 
    "price": 2000.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "20 X 1 X 4 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MAYO-_60K_S.jpg"
  }, 
  {
    "id": 95, 
    "name": "M-CIT", 
    "brand": "Cetirizine 10 mg Tab (Dpco)", 
    "price": 421.0, 
    "schemes": [
      {
        "name": "4 + 2", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M-CIT.jpg"
  }, 
  {
    "id": 96, 
    "name": "MDPF", 
    "brand": "Doxylamine Succinate 10 mg, Pyridoxine10 mg, Folic Acid 2.5 mg Tab", 
    "price": 500.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MDPF.jpg"
  }, 
  {
    "id": 97, 
    "name": "MDZ-6", 
    "brand": "Deflazacort 6 mg Tab", 
    "price": 1500.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MDZ-6.jpg"
  }, 
  {
    "id": 98, 
    "name": "ME-D3", 
    "brand": "Magnesium Glycine complex 250 mg \nVitamin D3 IP 1000 IU", 
    "price": 2300.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ME-D3.jpg"
  }, 
  {
    "id": 99, 
    "name": "M FLUK – 150", 
    "brand": "Fluconazole 150 mg Tab (Dpco)", 
    "price": 1350.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "25 X 4 X 1 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M_FLUK_–_150.jpg"
  }, 
  {
    "id": 100, 
    "name": "M FLUK – 200", 
    "brand": "Fluconazole 200 mg Tab (Dpco)", 
    "price": 1955.5, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 5 X 2 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M_FLUK_–_200.jpg"
  }, 
  {
    "id": 101, 
    "name": "M GRAIN -10", 
    "brand": "Flunarizine 10 mg Tab (Dpco)", 
    "price": 539.8, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10  X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M_GRAIN_-10.jpg"
  }, 
  {
    "id": 102, 
    "name": "M-KON 90", 
    "brand": "Etoricoxib 90 mg Tab", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M-KON_90.jpg"
  }, 
  {
    "id": 103, 
    "name": "M-KON-120", 
    "brand": "Etoricoxib 120mg Tab", 
    "price": 1400.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M-KON-120.jpg"
  }, 
  {
    "id": 104, 
    "name": "M-KON P", 
    "brand": "Etoricoxib 60 mg, Paracetamol 325 mg Tabs", 
    "price": 1350.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M-KON_P.jpg"
  }, 
  {
    "id": 105, 
    "name": "M KON -64 MR", 
    "brand": "Etoricoxib 60 mg, Thiocolchicoside 4 mg Tab", 
    "price": 2250.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M_KON_-64_MR.jpg"
  }, 
  {
    "id": 106, 
    "name": "M - PAM", 
    "brand": "Dicyclomine 20 mg, Paracetamol 325 mg Tab", 
    "price": 1000.0, 
    "schemes": [
      {
        "name": "3 + 2 New 4 + 1", 
        "description": "4 X 5 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M_-_PAM.jpg"
  }, 
  {
    "id": 107, 
    "name": "MMPX-4", 
    "brand": "Methyl Prednisolone 4 mg Tabs", 
    "price": 500.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MMPX-4.jpg"
  }, 
  {
    "id": 108, 
    "name": "MMPX-8", 
    "brand": "Methyl Prednisolone 8 mg Tabs (Dpco)", 
    "price": 900.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MMPX-8.jpg"
  }, 
  {
    "id": 109, 
    "name": "MNFX-130", 
    "brand": "Montelukast 10 mg, Fexofenadine 120 mg Tab", 
    "price": 1900.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MNFX-130.jpg"
  }, 
  {
    "id": 110, 
    "name": "MC LAC", 
    "brand": "B-Complex With Lactic acid Bacillus Tabs", 
    "price": 600.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 15 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MC_LAC.jpg"
  }, 
  {
    "id": 111, 
    "name": "MOFCARE–200", 
    "brand": "Ofloxacin 200 mg Tab (BLISTER)", 
    "price": 730.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOFCARE–200.jpg"
  }, 
  {
    "id": 112, 
    "name": "MOFCARE–200", 
    "brand": "Ofloxacin 200 mg Tab (ALU ALU)", 
    "price": 750.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOFCARE–200_2.jpg"
  }, 
  {
    "id": 113, 
    "name": "MOFCARE - OZ", 
    "brand": "Oflaxacin 200 mg, Ornidazole 500 mg Tab", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOFCARE_-_OZ.jpg"
  }, 
  {
    "id": 114, 
    "name": "MOFCARE - OZ", 
    "brand": "Oflaxacin 200 mg, Ornidazole 500 mg Tab (New attactive pack with Barcode )", 
    "price": 1300.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOFCARE_-_OZ_2.jpg"
  }, 
  {
    "id": 115, 
    "name": "MOXSPEN– 250 DT", 
    "brand": "Amoxycillin 250 mg Dispersible Tab", 
    "price": 700.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOXSPEN–_250_DT.jpg"
  }, 
  {
    "id": 116, 
    "name": "MOXSPEN–500", 
    "brand": "Amoxycillin 500 mg Caps(Dpco)", 
    "price": 824.3, 
    "schemes": [
      {
        "name": "NO OFFER", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOXSPEN–500.jpg"
  }, 
  {
    "id": 117, 
    "name": "MOXSPEN CL 375", 
    "brand": "Amoxycillin 250 mg, Clavulanate Potassium 125 mg tab", 
    "price": 1140.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 6 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOXSPEN_CL_375.jpg"
  }, 
  {
    "id": 118, 
    "name": "MOXSPEN CL 625", 
    "brand": "Amoxycillin 500 mg, Clavulanate Potassium 125 mg Tab (Dpco)", 
    "price": 2049.6, 
    "schemes": [
      {
        "name": "10+1", 
        "description": "10 X 1 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOXSPEN_CL_625.jpg"
  }, 
  {
    "id": 119, 
    "name": "MOXSPEN CL 625 LB", 
    "brand": "Amoxycillin 500mg, Pot. Clavulanate 125 mg , Lactic Acid Bacillius 60 Million Spores Tabs", 
    "price": 2800.0, 
    "schemes": [
      {
        "name": "3 + 1  New 8 + 1", 
        "description": "10 X 1 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOXSPEN_CL_625_LB.jpg"
  }, 
  {
    "id": 120, 
    "name": "MOZ -500", 
    "brand": "Ornidazole 500 Tabs", 
    "price": 1400.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOZ_-500.jpg"
  }, 
  {
    "id": 121, 
    "name": "MYOVIG", 
    "brand": "Metformin 500 mg, Myoinositol 600 mg Bilayered Tabs", 
    "price": 2300.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MYOVIG.jpg"
  }, 
  {
    "id": 122, 
    "name": "NU-GP", 
    "brand": "Nortriptyline 10 mg, Gabapentin 400 mg Tabs", 
    "price": 1600.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NU-GP.jpg"
  }, 
  {
    "id": 123, 
    "name": "NU-P", 
    "brand": "Nortriptyline Hcl 10 mg, Pregabalin 75 mg Tab", 
    "price": 1500.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NU-P.jpg"
  }, 
  {
    "id": 124, 
    "name": "NEUROMAC", 
    "brand": "Methylcobalamin 500 mcg, Anti Oxidants,         Multivitamin & Multimineral Tabs", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 15 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEUROMAC.jpg"
  }, 
  {
    "id": 125, 
    "name": "NEUROMAC -GF", 
    "brand": "Methylcobalamin 1000 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5mg, pyridoxine HCL 3mg, Thiaminemono 10 mg, Zinc Sulphate 61.8 mg, Glutamic Acid 100 mg , Vitamins Caps", 
    "price": 1800.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEUROMAC_-GF.jpg"
  }, 
  {
    "id": 126, 
    "name": "NEUROMAC -GFS", 
    "brand": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5 mg, Vit.B6 1.5 mg, Chromium Picolinate 500 mcg, Sodium Selenate 75mcg, Zinc Sulphate Mono 7.5mg Softgel Caps", 
    "price": 1900.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 1 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEUROMAC_-GFS.jpg"
  }, 
  {
    "id": 127, 
    "name": "NEUROMAC -LC", 
    "brand": "L –Carnitine, L-Tartrate 500 mg, \nMethylcobalamin 1500 mcg, Folic acid 1.5 mg Tabs", 
    "price": 2850.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 15 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEUROMAC_-LC.jpg"
  }, 
  {
    "id": 128, 
    "name": "NEUROMAC -PB", 
    "brand": "Methylcobalamin 750 mcg,      Pregabalin 75 mg Caps", 
    "price": 1400.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEUROMAC_-PB.jpg"
  }, 
  {
    "id": 129, 
    "name": "NEUROMAC - GP", 
    "brand": "Methylcobalamin 500 mcg, Gabapentin 300 mg, Tab", 
    "price": 1500.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEUROMAC_-_GP.jpg"
  }, 
  {
    "id": 130, 
    "name": "NEET", 
    "brand": "Nimesulide 100 mg Tab", 
    "price": 800.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEET.jpg"
  }, 
  {
    "id": 131, 
    "name": "NEET PLUS", 
    "brand": "Nimesulide 100 mg, Paracetamol 325 mg Tab", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEET_PLUS.jpg"
  }, 
  {
    "id": 132, 
    "name": "NEET-SP", 
    "brand": "Nimesulide 100 mg, Paracetamol 325 mg,        Serratiopeptidase 15 mg Tab", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEET-SP.jpg"
  }, 
  {
    "id": 133, 
    "name": "NEET CLP", 
    "brand": "Nimesulide 100 mg , para 325 mg, Phenylephrine 10 mg, Caffiene 25 mg Tab", 
    "price": 1380.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEET_CLP.jpg"
  }, 
  {
    "id": 134, 
    "name": "OFER - XL", 
    "brand": "Ferrous Ascorbate Eq to elemental iron 100 mg , Folic acid 1.5 + zinc sulphate monohydrate eq to Elemental zinc 22.5 mg Tabs", 
    "price": 1100.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/OFER_-_XL.jpg"
  }, 
  {
    "id": 135, 
    "name": "OFER XL PLUS", 
    "brand": "Ferrous pyrophosphate 60 mg, Cyanocobalamin 1mcg folic acid 300 mcg, zinc sulphate  monhydrate-eq to elemental zinc 7.5 mg SOFT gel caps", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 1 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/OFER_XL_PLUS.jpg"
  }, 
  {
    "id": 136, 
    "name": "ORFINE - 250", 
    "brand": "Terbinafine 250 Tab", 
    "price": 1330.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 1 X 7 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ORFINE_-_250.jpg"
  }, 
  {
    "id": 137, 
    "name": "ORVIG -M", 
    "brand": "Diacerin 50mg, Glucosamine Sulphate 750 mg, Methyl Sulfonyl Methane (MSM) 250 mg Tabs", 
    "price": 2300.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 1 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ORVIG_-M.jpg"
  }, 
  {
    "id": 138, 
    "name": "PRO - FIT", 
    "brand": "Prebiotic & Probiotic sachet", 
    "price": 700.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "25 X  1 Sachets"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PRO_-_FIT.jpg"
  }, 
  {
    "id": 139, 
    "name": "PRO - FIT", 
    "brand": "Prebiotic & probiotic (Bifidobacterium & Lactobacillus) Caps", 
    "price": 1700.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PRO_-_FIT_2.jpg"
  }, 
  {
    "id": 140, 
    "name": "PRECARE -100", 
    "brand": "Micronised Progesterone 100 mg TAB", 
    "price": 1800.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PRECARE_-100.jpg"
  }, 
  {
    "id": 141, 
    "name": "PLEXFORTE", 
    "brand": "Multivitamin & Multimineral Tab", 
    "price": 600.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 15 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PLEXFORTE.jpg"
  }, 
  {
    "id": 142, 
    "name": "PLEXFORTE - ZL", 
    "brand": "Lycopene 6% 2000 mcg, Vit A, E, C, Zinc & Selenium Softgel Caps", 
    "price": 890.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 1 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PLEXFORTE_-_ZL.jpg"
  }, 
  {
    "id": 143, 
    "name": "RAVIG - 20", 
    "brand": "Rabeprazole 20 mg Tab", 
    "price": 1050.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 15 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/RAVIG_-_20.jpg"
  }, 
  {
    "id": 144, 
    "name": "RAVIG - D", 
    "brand": "Rabeprazole 20 mg, Domperidone 10 mg Tab", 
    "price": 790.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/RAVIG_-_D.jpg"
  }, 
  {
    "id": 145, 
    "name": "RAVIG - D", 
    "brand": "Rabeprazole 20 mg, Domperidone 10 mg Tab", 
    "price": 1270.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 15 AA (Numbering base foil)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/RAVIG_-_D_2.jpg"
  }, 
  {
    "id": 146, 
    "name": "RAVIG - DSR", 
    "brand": "Rabeprazole 20 mg, Domperidone 30 mg SR Cap (STRIP)", 
    "price": 1050.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/RAVIG_-_DSR.jpg"
  }, 
  {
    "id": 147, 
    "name": "RAVIG - DSR", 
    "brand": "Rabeprazole 20 mg, Domperidone 30 mg SR Cap (Alu Alu)", 
    "price": 1100.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/RAVIG_-_DSR_2.jpg"
  }, 
  {
    "id": 148, 
    "name": "RAVIG - DSR", 
    "brand": "Rabeprazole 20 mg, Domperidone 30 mg SR Cap (Alu Alu)", 
    "price": 1800.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 15 AA Alkem pack"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/RAVIG_-_DSR_3.jpg"
  }, 
  {
    "id": 149, 
    "name": "RAVIG DSR-TT", 
    "brand": "Rabeprazole 20 mg, Domperidone 30 mg SR Cap (Tablet Technology)", 
    "price": 2100.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/RAVIG_DSR-TT.jpg"
  }, 
  {
    "id": 150, 
    "name": "RAVIG - LP", 
    "brand": "Rabeprazole 20 mg Levosulpride 75 mg SR Caps", 
    "price": 1700.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/RAVIG_-_LP.jpg"
  }, 
  {
    "id": 151, 
    "name": "ROSBEX-C", 
    "brand": "Rosehip Extract 275 mg, Vitamin C 20 mg, Curcumin Extract 400 mg VEG CAPS", 
    "price": 3120.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "4 X 1 X 20 Bottl"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ROSBEX-C.jpg"
  }, 
  {
    "id": 152, 
    "name": "S COLD PLUS", 
    "brand": "Paracetamol 500 mg, Phenylephrine 5 mg, Caffeine 30 mg, Diphenhydramine 25 mg Tab", 
    "price": 1000.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/S_COLD_PLUS.jpg"
  }, 
  {
    "id": 153, 
    "name": "S DOL-10", 
    "brand": "Serratiopeptidase 10 mg Tab", 
    "price": 550.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/S_DOL-10.jpg"
  }, 
  {
    "id": 154, 
    "name": "S DOL - D", 
    "brand": "Diclofenac Potassium 50 mg       Serratiopeptidase 10 mg Tab", 
    "price": 790.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/S_DOL_-_D.jpg"
  }, 
  {
    "id": 155, 
    "name": "S DOL - D", 
    "brand": "Diclofenac Potassium 50 mg       Serratiopeptidase 10 mg Tab", 
    "price": 1185.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 1 X 15 AA (New attractive pack)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/S_DOL_-_D_2.jpg"
  }, 
  {
    "id": 156, 
    "name": "SIXER", 
    "brand": "Diclofenac Potassium 50 mg, Paracetamol 325 mg Tab", 
    "price": 900.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/SIXER.jpg"
  }, 
  {
    "id": 157, 
    "name": "SIXER PLUS", 
    "brand": "Diclofenac Potassium 50 mg, Paracetamol        325 mg, Chlorzoxazone 250mg Tab", 
    "price": 1600.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "20 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/SIXER_PLUS.jpg"
  }, 
  {
    "id": 158, 
    "name": "STIFTAZ-40", 
    "brand": "Febuxostat 40 mg Tabs", 
    "price": 990.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/STIFTAZ-40.jpg"
  }, 
  {
    "id": 159, 
    "name": "STUFVIG", 
    "brand": "Camphor 25 mg, Chlorothymol 5 mg, Eucalyptol 125 mg, Menthol 55mg , Terpineol 120 mg soft Gelatin caps", 
    "price": 950.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/STUFVIG.jpg"
  }, 
  {
    "id": 160, 
    "name": "TAK-MD", 
    "brand": "Esomeprazole 20 mg, Domperidone 30 mg SR Cap", 
    "price": 1000.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/TAK-MD.jpg"
  }, 
  {
    "id": 161, 
    "name": "TAK-MDS", 
    "brand": "Esomeprazole 40 mg Domperidone 30mg SR CAPS", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "2 + 4", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/TAK-MDS.jpg"
  }, 
  {
    "id": 162, 
    "name": "TENDOVIG", 
    "brand": "Collagen Peptide Type I 40 mg, Sodium Hyaluronate 30 mg, Chondroitin Sulfate Sodium 200 mg, Vitamin C 35 mg Tabs", 
    "price": 3000.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 1 X 15 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/TENDOVIG.jpg"
  }, 
  {
    "id": 163, 
    "name": "TENDOVIG II PLUS", 
    "brand": "Collagen Peptide (type-II), Glucosamine Chondroitin, Vitamins & Minerals Tabs", 
    "price": 1500.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "6 X 1 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/TENDOVIG_II_PLUS.jpg"
  }, 
  {
    "id": 164, 
    "name": "TAPVIG -50", 
    "brand": "Tapentadol 50 Tab", 
    "price": 1800.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/TAPVIG_-50.jpg"
  }, 
  {
    "id": 165, 
    "name": "TOLVIG-150", 
    "brand": "Tolperisone 150 mg Tab", 
    "price": 1390.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/TOLVIG-150.jpg"
  }, 
  {
    "id": 166, 
    "name": "TOSS-TS4", 
    "brand": "Etodolac 400 mg, Thiocolchicoside 4 mg Tabs", 
    "price": 1450.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "5 X 1 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/TOSS-TS4.jpg"
  }, 
  {
    "id": 167, 
    "name": "TREAT PLUS", 
    "brand": "Tramadol 37.5 mg, Paracetamol 325 mg Tab", 
    "price": 1500.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 1 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/TREAT_PLUS.jpg"
  }, 
  {
    "id": 168, 
    "name": "URSOVIG-300", 
    "brand": "Ursodeoxycholic acid 300 mg Tabs", 
    "price": 5850.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/URSOVIG-300.jpg"
  }, 
  {
    "id": 169, 
    "name": "VIGBI-20", 
    "brand": "Bilastine 20 mg Tabs", 
    "price": 1300.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/VIGBI-20.jpg"
  }, 
  {
    "id": 170, 
    "name": "VIGBI-MN", 
    "brand": "Bilastine 20 mg , Montelukast 10 mg Tabs", 
    "price": 1800.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/VIGBI-MN.jpg"
  }, 
  {
    "id": 171, 
    "name": "VIGDOT-100", 
    "brand": "Racecadotril 100 mg Caps ", 
    "price": 3300.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/VIGDOT-100.jpg"
  }, 
  {
    "id": 172, 
    "name": "VOMIVEN-MD", 
    "brand": "Ondonsetron 4 mg Mouth Dissolving Tabs (Dpco)", 
    "price": 575.6, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/VOMIVEN-MD.jpg"
  }, 
  {
    "id": 173, 
    "name": "V-ZYME", 
    "brand": "Alpha Amylase 100 mg, Papain 60 mg, Activated Charcoal 75 mg Tabs", 
    "price": 600.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 15 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/V-ZYME.jpg"
  }, 
  {
    "id": 174, 
    "name": "Z-PES", 
    "brand": "Calcitriol 0.25 mcg, Calcium Carbonate 500 mg, Zinc Sulphate 7.5 mg Soft Gel Caps", 
    "price": 2250.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "5 X 2 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/Z-PES.jpg"
  }, 
  {
    "id": 175, 
    "name": "Z-PES", 
    "brand": "Calcitriol 0.25 mcg, Calcium Carbonate 500 mg, Zinc Sulphate 7.5 mg Soft Gel Caps", 
    "price": 2700.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 1 X 15 BL New attactive pack"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/Z-PES_2.jpg"
  }, 
  {
    "id": 176, 
    "name": "ZOMCARE–20", 
    "brand": "Omeprazole 20 mg Caps (Dpco)", 
    "price": 960.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "20 X 15 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ZOMCARE–20.jpg"
  }, 
  {
    "id": 177, 
    "name": "ZOMCARE–D", 
    "brand": "Omeprazole 20 mg, Domperidone 10mg Caps", 
    "price": 900.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 15 ST"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ZOMCARE–D.jpg"
  }, 
  {
    "id": 178, 
    "name": "ZEDVIG +", 
    "brand": "Trypsin 48 mg, Bromelain 90 mg, Rutoside, Trihydrate100 mg, Diclofenac Sod. 50 mg Tabs", 
    "price": 2000.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ZEDVIG_+.jpg"
  }, 
  {
    "id": 179, 
    "name": "ZEDVIG-TCS", 
    "brand": "Trypsin, Chymotrypsin, Acelclofenac100 mg, Paracetamol 325 mg Tabs", 
    "price": 1900.0, 
    "schemes": [
      {
        "name": "3 + 3", 
        "description": "10 X 1 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ZEDVIG-TCS.jpg"
  }, 
  {
    "id": 180, 
    "name": "BEST-M", 
    "brand": "Gliclazide 80 mg, Metformin 500 mg Tab", 
    "price": 1100.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/BEST-M.jpg"
  }, 
  {
    "id": 181, 
    "name": "DAOCON-M", 
    "brand": "Glibenclamide 5mg, Metformin 500mgTab", 
    "price": 350.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DAOCON-M.jpg"
  }, 
  {
    "id": 182, 
    "name": "GRIP – M 1 SR", 
    "brand": "Glimepride 1 mg, Metformin 500 mg SR Bilayered Tab", 
    "price": 790.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GRIP_–_M_1_SR.jpg"
  }, 
  {
    "id": 183, 
    "name": "GRIP – M 2 SR", 
    "brand": "Glimepride 2 mg, Metformin 500 mg (SR) Bilayered Tab", 
    "price": 890.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GRIP_–_M_2_SR.jpg"
  }, 
  {
    "id": 184, 
    "name": "LOVIG -HT", 
    "brand": "Losartan potassium 50 mg, Hydrochlorothizide 12.5", 
    "price": 700.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LOVIG_-HT.jpg"
  }, 
  {
    "id": 185, 
    "name": "LYVIT-D", 
    "brand": "Protein Powder with American Ice cream flavour Protein Powder", 
    "price": 270.0, 
    "schemes": [
      {
        "name": "45 + 5", 
        "description": "200 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYVIT-D.jpg"
  }, 
  {
    "id": 186, 
    "name": "LYVIT-D", 
    "brand": "Protein Powder with American Ice cream flavour Protein Powder", 
    "price": 299.0, 
    "schemes": [
      {
        "name": "45 + 5", 
        "description": "200 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYVIT-D_2.jpg"
  }, 
  {
    "id": 187, 
    "name": "M LINA FORTE", 
    "brand": "Antioxidants with Lycopene Caps", 
    "price": 1350.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "5 X 2 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M_LINA_FORTE.jpg"
  }, 
  {
    "id": 188, 
    "name": "PINVIG-AT", 
    "brand": "Amlodipine 5 mg, Atenolol 50 mg Tabs", 
    "price": 500.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PINVIG-AT.jpg"
  }, 
  {
    "id": 189, 
    "name": "WYMET", 
    "brand": "Metformin 500 mg Tab  (Dpco)", 
    "price": 337.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 15 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/WYMET.jpg"
  }, 
  {
    "id": 190, 
    "name": "CPT-500 Caps", 
    "brand": "Carica Papaya Leaves Ext 350 mg, Tinospora Cordifolia Stem Ext 150 mg Caps", 
    "price": 3000.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "10 X 1 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CPT-500_Caps.jpg"
  }, 
  {
    "id": 191, 
    "name": "CPT Syp", 
    "brand": "Platelet Enhancer SYR", 
    "price": 199.0, 
    "schemes": [
      {
        "name": "58 + 14", 
        "description": "200 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CPT_Syp.jpg"
  }, 
  {
    "id": 192, 
    "name": "GYVIG SYR", 
    "brand": "UTERINE TONIC", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "60 + 12", 
        "description": "200 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GYVIG_SYR.jpg"
  }, 
  {
    "id": 193, 
    "name": "MADHAV BALM", 
    "brand": "Herbal Pain Relief balm", 
    "price": 49.0, 
    "schemes": [
      {
        "name": "8 + 1", 
        "description": "12 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MADHAV_BALM.jpg"
  }, 
  {
    "id": 194, 
    "name": "MX SHAK", 
    "brand": "Supplement of Vigour & Vitality caps for Men", 
    "price": 2300.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "5 X 2 X 10 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MX_SHAK.jpg"
  }, 
  {
    "id": 195, 
    "name": "M-52 DS CAP", 
    "brand": "LIVER CAPS", 
    "price": 690.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "10 X 10 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M-52_DS_CAP.jpg"
  }, 
  {
    "id": 196, 
    "name": "M-52 DS SYR", 
    "brand": "LIVER TONIC SYR", 
    "price": 168.0, 
    "schemes": [
      {
        "name": "60 + 12", 
        "description": "200 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M-52_DS_SYR.jpg"
  }, 
  {
    "id": 197, 
    "name": "OS-M ROLL ON", 
    "brand": "Herbal Pain Relief Roll on", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "60 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/OS-M_ROLL_ON.jpg"
  }, 
  {
    "id": 198, 
    "name": "YESTONE TAB", 
    "brand": "STONE CRUSHER TAB", 
    "price": 1125.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "30 X 5 BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/YESTONE_TAB.jpg"
  }, 
  {
    "id": 199, 
    "name": "YESTONE SYR", 
    "brand": "STONE CRUSHER Sugar free Syp", 
    "price": 179.0, 
    "schemes": [
      {
        "name": "60 + 12", 
        "description": "200 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/YESTONE_SYR.jpg"
  }, 
  {
    "id": 200, 
    "name": "ABDAL PLUS", 
    "brand": "Aceclofenac 50 mg, Paracetamol 125 mg Susp", 
    "price": 69.0, 
    "schemes": [
      {
        "name": "50 + 50", 
        "description": "60 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL_PLUS_3.jpg"
  }, 
  {
    "id": 201, 
    "name": "AB-LAX (dpco)", 
    "brand": "Lactulose 10 % Solution", 
    "price": 258.3, 
    "schemes": [
      {
        "name": "40 + 20", 
        "description": "200 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AB-LAX_(dpco).jpg"
  }, 
  {
    "id": 202, 
    "name": "ALKAVIG", 
    "brand": "Disodium Hydrogen Citrate 1.40 mg Syp", 
    "price": 99.0, 
    "schemes": [
      {
        "name": "85 + 15", 
        "description": "100 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ALKAVIG.jpg"
  }, 
  {
    "id": 203, 
    "name": "AMBRO-AB", 
    "brand": "Ambroxol 15 mg, Terbutaline Sulphate1.25       mg, Guaiphenesin 50 mg, Menthol 2.5 mg      Syp (Regular)", 
    "price": 109.0, 
    "schemes": [
      {
        "name": "90 + 10", 
        "description": "100 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AMBRO-AB.jpg"
  }, 
  {
    "id": 204, 
    "name": "AMBRO-AB SF\n(Sugar Free)", 
    "brand": "Ambroxol 15 mg, Terbutaline Sulphate        1.25 mg, Guaiphenesin 50 mg,    Menthol 1.5 mg Syp", 
    "price": 109.0, 
    "schemes": [
      {
        "name": "90 + 10 Bottles", 
        "description": "100 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AMBRO-AB_SF\n(Sugar_Free).jpg"
  }, 
  {
    "id": 205, 
    "name": "AMBRO -DX", 
    "brand": "Dextromethorphan hydrobromide 10 mg , Ambroxol 15mg, Phenylephrine 5mg, Cpm 2 mg Menthol 1.5 mg Syp", 
    "price": 109.0, 
    "schemes": [
      {
        "name": "90 + 10 Bottles", 
        "description": "100 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AMBRO_-DX.jpg"
  }, 
  {
    "id": 206, 
    "name": "AMB-LS Drops", 
    "brand": "Ambroxol HCL 7.5 mg, Levosulbutamol 0.25 mg, Guaiphenesin 12.5 mg Drops", 
    "price": 69.0, 
    "schemes": [
      {
        "name": "80 + 20", 
        "description": "15 ml pet"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AMB-LS_Drops.jpg"
  }, 
  {
    "id": 207, 
    "name": "AMB-LS Syp", 
    "brand": "Ambroxol HCL 30 mg, Levosulbutamol 1 mg, Guaiphenesin 50 mg Syp (Regular)", 
    "price": 105.0, 
    "schemes": [
      {
        "name": "90 + 10 Bottles", 
        "description": "100 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AMB-LS_Syp.jpg"
  }, 
  {
    "id": 208, 
    "name": "AMB-LS Syp", 
    "brand": "Ambroxol HCL 30 mg, Levosulbutamol      1 mg, Guaiphenesin 50 mg Syp(Cherry & Strawberry flavour)", 
    "price": 109.0, 
    "schemes": [
      {
        "name": "85 + 15 Bottles", 
        "description": "100 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/AMB-LS_Syp_2.jpg"
  }, 
  {
    "id": 209, 
    "name": "BRENZ PLUS", 
    "brand": "Acebrophylline 50 mg , Guaiphenesin 50 mg, Terbutaline sulphate 1.25 mg Syp", 
    "price": 145.0, 
    "schemes": [
      {
        "name": "75 + 25", 
        "description": "100 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/BRENZ_PLUS.jpg"
  }, 
  {
    "id": 210, 
    "name": "CALSPAN", 
    "brand": "Calcium Carbonate, Magnesium Hydroxide,     Zinc Gluconate, Vitamin D3 Susp", 
    "price": 119.0, 
    "schemes": [
      {
        "name": "50 + 10\nBottles", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CALSPAN.jpg"
  }, 
  {
    "id": 211, 
    "name": "CARVIP", 
    "brand": "Ferric ammonium Citrate, Lycopene, Mecobalamin and Zinc Syp", 
    "price": 139.0, 
    "schemes": [
      {
        "name": "40 + 10 \nBottles", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CARVIP.jpg"
  }, 
  {
    "id": 212, 
    "name": "D-TUSS SYR", 
    "brand": "Dextromethorphan hydrobromide 10 mg, CPM 2 mg, Phenylephrine Hcl 5 mg Syp", 
    "price": 105.0, 
    "schemes": [
      {
        "name": "90 + 10", 
        "description": "100 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/D-TUSS_SYR.jpg"
  }, 
  {
    "id": 213, 
    "name": "D-TUSS SYR", 
    "brand": "Dextromethorphan hydrobromide 10 mg,        CPM 2 mg, Phenylephrine Hcl 5 mg Syp", 
    "price": 109.0, 
    "schemes": [
      {
        "name": "90 + 10", 
        "description": "100 ml Paan Flavour"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/D-TUSS_SYR_2.jpg"
  }, 
  {
    "id": 214, 
    "name": "D TUSS-CN", 
    "brand": "Dextromethorphan HBR 5 mg, Phenylephrine HCL 2.5 mg, Citirizine Dihydrochloride 5 mg \n", 
    "price": 109.0, 
    "schemes": [
      {
        "name": "76 + 24", 
        "description": "100 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/D_TUSS-CN.jpg"
  }, 
  {
    "id": 215, 
    "name": "D TUSS-CP", 
    "brand": "Paracetamol 250 mg , Dextromethorphan HBR 5 mg, Phenylephrine HCL 5 mg, Cetirizine hydrochloride 2.5 mg, Sodium citrate 25 mg &Menthol 1 mg Susp \n", 
    "price": 85.0, 
    "schemes": [
      {
        "name": "76 + 24", 
        "description": "60 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/D_TUSS-CP.jpg"
  }, 
  {
    "id": 216, 
    "name": "DULAK PLUS", 
    "brand": "Liquid paraffin 1.25 ml, Milk of magnesia       3.75 ml, Sodium picosulphate 3.33 mg Syp", 
    "price": 159.0, 
    "schemes": [
      {
        "name": "58 + 14", 
        "description": "170 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DULAK_PLUS.jpg"
  }, 
  {
    "id": 217, 
    "name": "EBEX PLUS", 
    "brand": "Albendazole 200 mg , Ivermectin 1.5 mg susp", 
    "price": 49.0, 
    "schemes": [
      {
        "name": "45 + 15", 
        "description": "10 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EBEX_PLUS.jpg"
  }, 
  {
    "id": 218, 
    "name": "FEP", 
    "brand": "Paracetamol 250 mg Susp (Dpco )", 
    "price": 45.0, 
    "schemes": [
      {
        "name": "90 + 10", 
        "description": "60 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/FEP.jpg"
  }, 
  {
    "id": 219, 
    "name": "FEP", 
    "brand": "Paracetamol 250 mg Susp (Dpco )", 
    "price": 75.0, 
    "schemes": [
      {
        "name": "90 + 10", 
        "description": "100 ml (Pet)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/FEP_2.jpg"
  }, 
  {
    "id": 220, 
    "name": "GEFPLUS", 
    "brand": "Paracetamol 125 mg,    Mefenamic Acid 50 mg Susp", 
    "price": 55.0, 
    "schemes": [
      {
        "name": "75 + 25", 
        "description": "60 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GEFPLUS_2.jpg"
  }, 
  {
    "id": 221, 
    "name": "GEF PLUS DS", 
    "brand": "Mefenamic acid 100 mg,  Paracetamol 250 mg Susp", 
    "price": 69.0, 
    "schemes": [
      {
        "name": "85 + 15", 
        "description": "60 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GEF_PLUS_DS.jpg"
  }, 
  {
    "id": 222, 
    "name": "HANEX", 
    "brand": "Diphenhydramine 14.08 mg, Ammonium      Chloride 138 mg, Sodium Citrate 57.03 mg,    Menthol 4 mg Syp", 
    "price": 109.0, 
    "schemes": [
      {
        "name": "90 + 10", 
        "description": "100 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/HANEX.jpg"
  }, 
  {
    "id": 223, 
    "name": "HANGEL", 
    "brand": "Dried Aluminium Hydroxide Gel 250 mg, Magnesium Hydroxide 250 mg, Simethicone 50 mg Susp (MANGO FLAVOUR) with multi-colour measuring cup", 
    "price": 105.0, 
    "schemes": [
      {
        "name": "66 + 6\nBottles ", 
        "description": "170 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/HANGEL.jpg"
  }, 
  {
    "id": 224, 
    "name": "HANGEL", 
    "brand": "Dried Aluminium Hydroxide Gel 250 mg, Magnesium Hydroxide 250 mg, Simethicone 50 mg Susp (ANISEED FLAVOUR) with multi-colour measuring cup", 
    "price": 105.0, 
    "schemes": [
      {
        "name": "66 + 6 \nBottles", 
        "description": "170 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/HANGEL_2.jpg"
  }, 
  {
    "id": 225, 
    "name": "HANGEL O", 
    "brand": "Aluminium Hydroxide 250 mg, Magnesium Hydroxide 250 mg, Simethicone 50 mg & Oxetacaine 10 mg Suspension with multi-colour measuring cup", 
    "price": 189.0, 
    "schemes": [
      {
        "name": "50 + 10\nBottles", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/HANGEL_O.jpg"
  }, 
  {
    "id": 226, 
    "name": "HANGEL O", 
    "brand": "Aluminium Hydroxide 250 mg, Magnesium Hydroxide 250 mg, Simethicone 50 mg & Oxetacaine 10 mg Suspension with multi-colour measuring cup", 
    "price": 145.0, 
    "schemes": [
      {
        "name": "60 + 12", 
        "description": "170 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/HANGEL_O_2.jpg"
  }, 
  {
    "id": 227, 
    "name": "LYCET MN KID", 
    "brand": "Levocetirizine 2.5 mg, Montelukast 4 mg Syp", 
    "price": 95.0, 
    "schemes": [
      {
        "name": "90 + 10", 
        "description": "60 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYCET_MN_KID.jpg"
  }, 
  {
    "id": 228, 
    "name": "LIVIG-M", 
    "brand": "Silymarin, L-Ornithine-L-Aspartate, Choline Citrate with Multivitamin Syrup", 
    "price": 249.0, 
    "schemes": [
      {
        "name": "58 + 14 Bottl", 
        "description": "200 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LIVIG-M.jpg"
  }, 
  {
    "id": 229, 
    "name": "MAYO-D3", 
    "brand": "Cholecalciferol 400 IU Drops", 
    "price": 69.0, 
    "schemes": [
      {
        "name": "90 + 18", 
        "description": "15 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MAYO-D3.jpg"
  }, 
  {
    "id": 230, 
    "name": "MAYO -D3 NANO SHOT", 
    "brand": "Vitamin oral solution \n60000 IU Nano shot \n", 
    "price": 276.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "4 X 5 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MAYO_-D3_NANO_SHOT.jpg"
  }, 
  {
    "id": 231, 
    "name": "M-BCS", 
    "brand": "Bacillus Clausii Spores Supsension 2 Billion spores", 
    "price": 708.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "12 Mini bott"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M-BCS.jpg"
  }, 
  {
    "id": 232, 
    "name": "MOFCARE -MZ", 
    "brand": "Ofloxacin 50mg, Metronidazole 120 mg, Simethicone 10 mg Susp", 
    "price": 79.0, 
    "schemes": [
      {
        "name": "40 + 10", 
        "description": "30 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOFCARE_-MZ.jpg"
  }, 
  {
    "id": 233, 
    "name": "MP4 DROPS", 
    "brand": "Paracetamol 125 mg, Phenylephrine 2.5 mg, Chlorpheniramine Maleate 1 mg Drops (NEW )", 
    "price": 85.0, 
    "schemes": [
      {
        "name": "140 + 28", 
        "description": "15 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MP4_DROPS.jpg"
  }, 
  {
    "id": 234, 
    "name": "MP4", 
    "brand": "Paracetamol 125 mg, Phenylephrine 5 mg, Chlorpheniramine Maleate 1 mg Susp", 
    "price": 69.0, 
    "schemes": [
      {
        "name": "85 + 15", 
        "description": "60 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MP4.jpg"
  }, 
  {
    "id": 235, 
    "name": "MP4 DS", 
    "brand": "Paracetamol 250 mg, Phenylephrine 5 mg, pheniramine Maleate 2 mg, \nSodium Citrate 60 mg Susp", 
    "price": 79.0, 
    "schemes": [
      {
        "name": "40 + 10 Bottles", 
        "description": "60 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MP4_DS.jpg"
  }, 
  {
    "id": 236, 
    "name": "MP4-AF", 
    "brand": "Phenylephrine 5 mg, Chlorpheniramine Maleate 2 mg Drops(NEW )", 
    "price": 79.0, 
    "schemes": [
      {
        "name": "70 + 30", 
        "description": "15 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MP4-AF.jpg"
  }, 
  {
    "id": 237, 
    "name": "M-SPAS", 
    "brand": "Dill oil 0.005 ml, Fennel oil 0.0007 ml, Simethicone 40 mg Drops", 
    "price": 79.0, 
    "schemes": [
      {
        "name": "70 + 30", 
        "description": "30 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M-SPAS.jpg"
  }, 
  {
    "id": 238, 
    "name": "PLEX FORTE", 
    "brand": "B Complex Syrup", 
    "price": 129.0, 
    "schemes": [
      {
        "name": "45 + 5", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PLEX_FORTE.jpg"
  }, 
  {
    "id": 239, 
    "name": "PLEXFORTE- ZL JUNIOR", 
    "brand": "Multivitamin, Minerals & Antioxidants Syp", 
    "price": 79.0, 
    "schemes": [
      {
        "name": "50 + 14 Bottles", 
        "description": "100 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PLEXFORTE-_ZL_JUNIOR.jpg"
  }, 
  {
    "id": 240, 
    "name": "PLEXFORTE- ZL", 
    "brand": "Lycopene 6%, Vit A, C, E, B, B2, B6, B12, D-Panthenol, Vit D3 Syp", 
    "price": 159.0, 
    "schemes": [
      {
        "name": "54 + 6 Bottles", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PLEXFORTE-_ZL.jpg"
  }, 
  {
    "id": 241, 
    "name": "POTVIG -B6", 
    "brand": "Potassim citrate IP 1100 mg , Magnesium Citrate usp 375 mg, Vitamin B6 20 mg Syrup", 
    "price": 199.0, 
    "schemes": [
      {
        "name": "50 + 10 Bottles", 
        "description": "200 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/POTVIG_-B6.jpg"
  }, 
  {
    "id": 242, 
    "name": "REJUPLEX", 
    "brand": "Multivitamins and Multiminerals SUGAR FREE Syrup", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "40 + 10 Bottles", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/REJUPLEX.jpg"
  }, 
  {
    "id": 243, 
    "name": "REPRO-Z", 
    "brand": "Iron, Protein with Zinc Syrup", 
    "price": 119.0, 
    "schemes": [
      {
        "name": "45 + 5", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/REPRO-Z.jpg"
  }, 
  {
    "id": 244, 
    "name": "SALCAIN", 
    "brand": "Sucralfate 1 gm, Oxetacaine 20 mg Syrup", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "90 +10 Bott", 
        "description": "100 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/SALCAIN.jpg"
  }, 
  {
    "id": 245, 
    "name": "SALCAIN", 
    "brand": "Sucralfate 1 gm, Oxetacaine 20 mg Syrup", 
    "price": 259.0, 
    "schemes": [
      {
        "name": "54 + 6 Bott", 
        "description": "200 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/SALCAIN_2.jpg"
  }, 
  {
    "id": 246, 
    "name": "VIGRAFT", 
    "brand": "Sodium Alginate 250 mg, Sodium bicarbonate 133.5 mg, Calcium carbonate 80 mg Susp \n", 
    "price": 219.0, 
    "schemes": [
      {
        "name": "50 + 10 Bott", 
        "description": "200 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/VIGRAFT.jpg"
  }, 
  {
    "id": 247, 
    "name": "VOMIVEN (dpco)", 
    "brand": "Ondansetron 2 mg Drops", 
    "price": 42.0, 
    "schemes": [
      {
        "name": "90 + 10", 
        "description": "30 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/VOMIVEN_(dpco).jpg"
  }, 
  {
    "id": 248, 
    "name": "V ZYME Drops", 
    "brand": "Carminative Mixture with Digestive Enzyme Drops", 
    "price": 69.0, 
    "schemes": [
      {
        "name": "83 + 25", 
        "description": "15 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/V_ZYME_Drops.jpg"
  }, 
  {
    "id": 249, 
    "name": "V ZYME", 
    "brand": "Diastase 50 mg, Pepsin 10 mg Syrup", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "NO OFFER", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/V_ZYME.jpg"
  }, 
  {
    "id": 250, 
    "name": "V ZYME -BC", 
    "brand": "Digestive Enzyme with B-complex syr", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "40 + 10 Bott", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/V_ZYME_-BC.jpg"
  }, 
  {
    "id": 251, 
    "name": "ZEVIP", 
    "brand": "Iron( III) L-Lysine and Zinc Syrup", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "46 + 4 Bott", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ZEVIP.jpg"
  }, 
  {
    "id": 252, 
    "name": "ZYPON", 
    "brand": "Cyproheptadine Hcl 2 mg, Tricoline Citrate 275 mg Syp", 
    "price": 145.0, 
    "schemes": [
      {
        "name": "55 + 5 Bott", 
        "description": "200 ml (PET)"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ZYPON.jpg"
  }, 
  {
    "id": 253, 
    "name": "M PROTEIN C", 
    "brand": "Protein powder with Chocolate flavour with lycopene(New attarctive Pack with DHA)", 
    "price": 299.0, 
    "schemes": [
      {
        "name": "44 + 4", 
        "description": "200 gm Tin"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M_PROTEIN_C.jpg"
  }, 
  {
    "id": 254, 
    "name": "LYVIT-Z", 
    "brand": "Protein Powder with American, Icecream flavour with Mecobalamin & lycopene", 
    "price": 245.0, 
    "schemes": [
      {
        "name": "45 + 5", 
        "description": "200 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYVIT-Z.jpg"
  }, 
  {
    "id": 255, 
    "name": "LYVIT-Z", 
    "brand": "Protein Powder with American, Icecream flavour with Mecobalamin & lycopene", 
    "price": 275.0, 
    "schemes": [
      {
        "name": "42 + 8", 
        "description": "200 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LYVIT-Z_2.jpg"
  }, 
  {
    "id": 256, 
    "name": "REDY-DF", 
    "brand": "Protein Powder with Badam flavour with Dry Fruits", 
    "price": 395.0, 
    "schemes": [
      {
        "name": "44 + 4", 
        "description": "200 gm with TIN"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/REDY-DF.jpg"
  }, 
  {
    "id": 257, 
    "name": "REDIFER", 
    "brand": "Chocolate flavour with lycopene GRANULES", 
    "price": 250.0, 
    "schemes": [
      {
        "name": "10 % Offer", 
        "description": "200 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/REDIFER.jpg"
  }, 
  {
    "id": 258, 
    "name": "ABDAL GEL", 
    "brand": "Aceclofenac IP 1.5% w/w, Linseed oil BP3% w/w , Methyl Salicylate IP 10 % w/w , Menthol IP 5% w/w, Capsaicin USP 0.01% w/w", 
    "price": NaN, 
    "schemes": [
      {
        "name": "8 + 2", 
        "description": "30 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ABDAL_GEL.jpg"
  }, 
  {
    "id": 259, 
    "name": "GEM-CD", 
    "brand": "Beclomethasone Dipropionate, Clotrimazole & Neomycin Cream", 
    "price": 79.0, 
    "schemes": [
      {
        "name": "20 + 5 Tubes", 
        "description": "15 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/GEM-CD.jpg"
  }, 
  {
    "id": 260, 
    "name": "NEET GEL", 
    "brand": "Nimesulide 10 mg, Capsaicin 0.25 mg, Menthol 50 mg, Methyl salicylate -100 mg Gel", 
    "price": 99.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "30 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEET_GEL.jpg"
  }, 
  {
    "id": 261, 
    "name": "NMC", 
    "brand": "Clobetasol Propionate 0.05% w/w, Neomycin 0.5% w/w, Miconazole Nitrate 2% w/w Cream", 
    "price": 89.0, 
    "schemes": [
      {
        "name": "15 + 5", 
        "description": "15 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NMC.jpg"
  }, 
  {
    "id": 262, 
    "name": "ORFINE -IT", 
    "brand": "Ofloxacin 0.75 w/w , Ornidazole 2% w/w, Itraconazole1 % w/w , Clobetasol propionate 0.05% w/w cream", 
    "price": 95.0, 
    "schemes": [
      {
        "name": "15 + 5 Tubes", 
        "description": "15 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ORFINE_-IT.jpg"
  }, 
  {
    "id": 263, 
    "name": "PM", 
    "brand": "Metronidazole, Povidone Iodine Ointment", 
    "price": 89.0, 
    "schemes": [
      {
        "name": "24 + 6 Tubes", 
        "description": "15 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PM.jpg"
  }, 
  {
    "id": 264, 
    "name": "SIXER", 
    "brand": "Capsicum 0.075% w/w, Methyl Salicylate 20% w/w, Menthol 10% w/w, Camphor 5%w/w, Eucalyptus Oil 5 w/w, Diclofenac Diethylamine 1.16% w/w cream", 
    "price": 169.0, 
    "schemes": [
      {
        "name": "NO OFFER", 
        "description": "30 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/SIXER_2.jpg"
  }, 
  {
    "id": 265, 
    "name": "SIXER ROLL ON", 
    "brand": "Diclofenac Diethylamine 1.16% w/w, Linseed Oil 3.00%, Methyl Salicylate10.00% Menthol 5%w/w", 
    "price": 199.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "50 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/SIXER_ROLL_ON.jpg"
  }, 
  {
    "id": 266, 
    "name": "SIXER SPRAY", 
    "brand": "Diclofenac Diethylamine 1.16% w/w, Linseed Oil 3.00%, Methyl Salicylate10.00%, Menthol 5% w/w", 
    "price": 199.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "55 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/SIXER_SPRAY.jpg"
  }, 
  {
    "id": 267, 
    "name": "TEE-2", 
    "brand": "Mupirocin IP 2.0 % w/w ointment", 
    "price": 113.62, 
    "schemes": [
      {
        "name": "13 + 7", 
        "description": "5 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/TEE-2.jpg"
  }, 
  {
    "id": 268, 
    "name": "Z KOOL", 
    "brand": "Calcium Dobesilate 0.25% w/w\nLignocaine Hydrochloride 3.0%w/w\nHydrocortisone Acetate 0.25% , Zinc 5% w/w ", 
    "price": 135.0, 
    "schemes": [
      {
        "name": "15 + 5", 
        "description": "30 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/Z_KOOL.jpg"
  }, 
  {
    "id": 269, 
    "name": "CAREDENT", 
    "brand": "Potassium Nitrate (TOOTH PASTE)", 
    "price": 95.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "50 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CAREDENT.jpg"
  }, 
  {
    "id": 270, 
    "name": "MOUDEN", 
    "brand": "Chlorohexidine 0.2% w/w, Sodium Benzoate 0.2% w/w (MOUTH WASH)", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "75 + 5 Bott", 
        "description": "150 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOUDEN.jpg"
  }, 
  {
    "id": 271, 
    "name": "CC-VIG", 
    "brand": "Carboxymethyl Cellulose Sodium 0.5% W/V(Eye Drops)", 
    "price": 89.0, 
    "schemes": [
      {
        "name": "22 + 8 Bottles", 
        "description": "10 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CC-VIG.jpg"
  }, 
  {
    "id": 272, 
    "name": "CCVIG -G", 
    "brand": "Carboxymethyl Cellulose Sodium 0.5% w/v, Glycerin 0.5% w/v (Eye drops )", 
    "price": 129.0, 
    "schemes": [
      {
        "name": "20 + 10", 
        "description": "10 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CCVIG_-G.jpg"
  }, 
  {
    "id": 273, 
    "name": "EMVIN -P", 
    "brand": "Xylometazoline 0.05% W/V (Paediatric) Nasal Drops (Dpco)", 
    "price": 46.9, 
    "schemes": [
      {
        "name": "15 + 15 New 23 + 7", 
        "description": "10 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMVIN_-P.jpg"
  }, 
  {
    "id": 274, 
    "name": "EMVIN", 
    "brand": "Xylometazoline Hcl 0.1% W/V (NASAL DROPS)(Dpco)", 
    "price": 57.34, 
    "schemes": [
      {
        "name": "23 + 7 Bottles", 
        "description": "10 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMVIN.jpg"
  }, 
  {
    "id": 275, 
    "name": "MOFCARE", 
    "brand": "Ofloxacin 0.3% W/V (Eye/Ear Drops) (Dpco)", 
    "price": 48.38, 
    "schemes": [
      {
        "name": "15 + 15  New 25 + 5", 
        "description": "10 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOFCARE.jpg"
  }, 
  {
    "id": 276, 
    "name": "MOX-AV", 
    "brand": "Moxifloxacin 0.5% W/V (Eye Drops)", 
    "price": 95.0, 
    "schemes": [
      {
        "name": "15 + 15 new 20 + 5", 
        "description": "5 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOX-AV.jpg"
  }, 
  {
    "id": 277, 
    "name": "MOX-LP", 
    "brand": "Moxifloxacin 0.5% W/V , Lotoprednol 0.5%W/V Eye drops", 
    "price": 195.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "5 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOX-LP.jpg"
  }, 
  {
    "id": 278, 
    "name": "MOX-PD", 
    "brand": "Moxifloxacin 0.5% W/V , Predinisolone 1 %W/V Eye drops", 
    "price": 89.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "5 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOX-PD.jpg"
  }, 
  {
    "id": 279, 
    "name": "MOZAS", 
    "brand": "Mometasone Furoate 0.05% w/w Nasal Spray", 
    "price": 325.0, 
    "schemes": [
      {
        "name": "8 + 2 Bottles", 
        "description": "10 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOZAS.jpg"
  }, 
  {
    "id": 280, 
    "name": "CEFVIG", 
    "brand": "Cefpodoxime Proxetil 50 mg Dry Syrup With Distilled Water", 
    "price": 95.0, 
    "schemes": [
      {
        "name": "110 + 10", 
        "description": "30 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CEFVIG.jpg"
  }, 
  {
    "id": 281, 
    "name": "CEFVIG-DS", 
    "brand": "Cefpodoxime Proxetil 100 mg Dry Syp With Distilled Water", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "110 + 10", 
        "description": "30 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/CEFVIG-DS.jpg"
  }, 
  {
    "id": 282, 
    "name": "EMTAX LB", 
    "brand": "Cefixime 50mg, Lactic acid bacillus 60 Million spores Dry Syp With Dist Water", 
    "price": 95.0, 
    "schemes": [
      {
        "name": "110 + 10", 
        "description": "30 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMTAX_LB.jpg"
  }, 
  {
    "id": 283, 
    "name": "EMTAX -OF", 
    "brand": "Cefixime 50 mg , Ofloxacin 50 mg Dry Syp With Distilled Water", 
    "price": 95.0, 
    "schemes": [
      {
        "name": "90 + 30", 
        "description": "30 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMTAX_-OF.jpg"
  }, 
  {
    "id": 284, 
    "name": "MOXSPEN- CL", 
    "brand": "Amoxicillin 200 mg, Clavulanate Potassium 28.5 mg Dry Syp with distilled water", 
    "price": 67.87, 
    "schemes": [
      {
        "name": "40 + 20 New 10%", 
        "description": "30 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOXSPEN-_CL.jpg"
  }, 
  {
    "id": 285, 
    "name": "MOXSPEN -CL LB", 
    "brand": "Amoxicillin 200 mg, Clavulanate Potassium 28.5 mg, Lactic acid bacillus Dry Syp with distilled water", 
    "price": 89.0, 
    "schemes": [
      {
        "name": "25 + 25", 
        "description": "30 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOXSPEN_-CL_LB.jpg"
  }, 
  {
    "id": 286, 
    "name": "MOXSPEN CL DS", 
    "brand": "Amoxycillin 400 mg, Clavulanate Potassium 57 mg dry syr with distilled water", 
    "price": 145.0, 
    "schemes": [
      {
        "name": "10% offer", 
        "description": "30 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/MOXSPEN_CL_DS.jpg"
  }, 
  {
    "id": 287, 
    "name": "PROFIT - BZ", 
    "brand": "Prebiotic , Probiotic with B-complex & Zinc dry syr", 
    "price": 119.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "25 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PROFIT_-_BZ.jpg"
  }, 
  {
    "id": 288, 
    "name": "EMLYTE -ZC", 
    "brand": "Enriched with Vitamin C & Zinc Powder", 
    "price": 79.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "105 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMLYTE_-ZC.jpg"
  }, 
  {
    "id": 289, 
    "name": "EMLYTE -ZC", 
    "brand": "Enriched with Dextrose , Vitamin C and Zinc Ready to drink", 
    "price": 59.0, 
    "schemes": [
      {
        "name": "50 + 10", 
        "description": "200 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EMLYTE_-ZC_2.jpg"
  }, 
  {
    "id": 290, 
    "name": "BOAT-MN (dpco)", 
    "brand": "Meropenem 1000 mg INJ", 
    "price": 1067.0, 
    "schemes": [
      {
        "name": "3 + 1", 
        "description": "VIAL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/BOAT-MN_(dpco).jpg"
  }, 
  {
    "id": 291, 
    "name": "DOLODIL", 
    "brand": "Piroxicam 20 mg Inj", 
    "price": 25.0, 
    "schemes": [
      {
        "name": "40 + 10", 
        "description": "2 ml Amp BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DOLODIL.jpg"
  }, 
  {
    "id": 292, 
    "name": "DECATOP - 25", 
    "brand": "Nandrolone Decanoate 25 mg Inj", 
    "price": 129.0, 
    "schemes": [
      {
        "name": "7 + 3", 
        "description": "1 ml Amp BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DECATOP_-_25.jpg"
  }, 
  {
    "id": 293, 
    "name": "DECATOP-50", 
    "brand": "Nandrolone Decanoate 50 mg Inj", 
    "price": 179.0, 
    "schemes": [
      {
        "name": "7 + 3", 
        "description": "1 ml Amp BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/DECATOP-50.jpg"
  }, 
  {
    "id": 294, 
    "name": "EN-M", 
    "brand": "Pantoprazole- 40 mg Inj", 
    "price": 56.0, 
    "schemes": [
      {
        "name": "15 + 5", 
        "description": "Vial"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/EN-M_3.jpg"
  }, 
  {
    "id": 295, 
    "name": "ESKA", 
    "brand": "Triamcinolone Acetonide 40 mg Inj", 
    "price": 89.0, 
    "schemes": [
      {
        "name": "30 + 6", 
        "description": "1 ml Vial"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ESKA.jpg"
  }, 
  {
    "id": 296, 
    "name": "LISEL – 250", 
    "brand": "Ceftriaxone Sodium Sterile 250 mg Inj", 
    "price": 31.74, 
    "schemes": [
      {
        "name": "27 + 3", 
        "description": "Vial"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LISEL_–_250.jpg"
  }, 
  {
    "id": 297, 
    "name": "LISEL – 500", 
    "brand": "Ceftriaxone Sodium Sterile 500 mg Inj", 
    "price": 56.06, 
    "schemes": [
      {
        "name": "23 + 2", 
        "description": "Vial"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LISEL_–_500.jpg"
  }, 
  {
    "id": 298, 
    "name": "LISEL – 1G", 
    "brand": "Ceftriaxone Sodium Sterile1000 mg Inj", 
    "price": 66.68, 
    "schemes": [
      {
        "name": "23 + 2", 
        "description": "Vial"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LISEL_–_1G.jpg"
  }, 
  {
    "id": 299, 
    "name": "LISEL - S 1.5", 
    "brand": "Ceftriaxone Sodium 1000 mg, Sulbactam 500 mg Inj", 
    "price": 180.0, 
    "schemes": [
      {
        "name": "22 + 3 VIAL", 
        "description": "Vial"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LISEL_-_S_1.5.jpg"
  }, 
  {
    "id": 300, 
    "name": "NAL-M", 
    "brand": "Diclofenac Sodium 75 mg Inj", 
    "price": 20.0, 
    "schemes": [
      {
        "name": "42 + 8", 
        "description": "1 ml Amp BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NAL-M.jpg"
  }, 
  {
    "id": 301, 
    "name": "NAL-M", 
    "brand": "Diclofenac Sodium 75 mg Inj", 
    "price": 25.0, 
    "schemes": [
      {
        "name": "42 + 8", 
        "description": "1 ml Amp BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NAL-M_2.jpg"
  }, 
  {
    "id": 302, 
    "name": "NEUROVIG - M", 
    "brand": "Mecobalamin 500 mcg Inj", 
    "price": 23.0, 
    "schemes": [
      {
        "name": "40 + 10", 
        "description": "1 ml Amp BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEUROVIG_-_M.jpg"
  }, 
  {
    "id": 303, 
    "name": "NEUROVIG-MD", 
    "brand": "Methylcobalamin 1000 mcg, Nicotinamide 10 mg, Pyridoxine Hcl 100 mg Inj", 
    "price": 79.0, 
    "schemes": [
      {
        "name": "8 + 2 Amp", 
        "description": "2 ml Amp BL Syringe with Needle"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/NEUROVIG-MD.jpg"
  }, 
  {
    "id": 304, 
    "name": "PARK - 500", 
    "brand": "Amikacin Sulphate 500 mg Inj", 
    "price": 109.0, 
    "schemes": [
      {
        "name": "33 + 3", 
        "description": "Vial"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PARK_-_500.jpg"
  }, 
  {
    "id": 305, 
    "name": "Q-M", 
    "brand": "Arteether 150 mg Inj", 
    "price": 99.0, 
    "schemes": [
      {
        "name": "15 + 15 New20 +10", 
        "description": "2 ml Amp"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/Q-M.jpg"
  }, 
  {
    "id": 306, 
    "name": "VOMIVEN", 
    "brand": "Ondansetron 2 mg In( Dpco )", 
    "price": 13.35, 
    "schemes": [
      {
        "name": "46 + 4 Amp", 
        "description": "2 ml Amp BL"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/VOMIVEN.jpg"
  }, 
  {
    "id": 307, 
    "name": "FEP", 
    "brand": "Paracetamol 1000 mg infusion", 
    "price": 499.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "100 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/FEP_3.jpg"
  }, 
  {
    "id": 308, 
    "name": "ALUBEST Cream", 
    "brand": "Aloes & Vitamin-E (Cream)", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "8 + 2", 
        "description": "50 gm Tube Pack"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ALUBEST_Cream.jpg"
  }, 
  {
    "id": 309, 
    "name": "ALUBEST Soap", 
    "brand": "Glycerine, Alovera, Vit E, Liquid Paraffin Light, Olive Oil, Jojoba Oil 75 gms SOAP", 
    "price": 95.0, 
    "schemes": [
      {
        "name": "20 + 4", 
        "description": "75 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ALUBEST_Soap.jpg"
  }, 
  {
    "id": 310, 
    "name": "ALUBEST-TS", 
    "brand": "Enriched with Aloe vera, Tulasi & Sandal", 
    "price": 129.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "75 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ALUBEST-TS.jpg"
  }, 
  {
    "id": 311, 
    "name": "ALUBEST Lotion", 
    "brand": "Aloes, Vitamin-E , Jojaba Oil , Squalene Lotion", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "8 + 2", 
        "description": "100 ml Pet"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ALUBEST_Lotion.jpg"
  }, 
  {
    "id": 312, 
    "name": "ACKVIG", 
    "brand": "Tea Tree Oil, Allantoin and Vit E Acetate Soap", 
    "price": 119.0, 
    "schemes": [
      {
        "name": "20 + 4", 
        "description": "75 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ACKVIG.jpg"
  }, 
  {
    "id": 313, 
    "name": "KEVIG", 
    "brand": "Ketoconazole 2%, ZPTO 1 % Shampoo", 
    "price": 189.0, 
    "schemes": [
      {
        "name": "4 + 1", 
        "description": "60 ml"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/KEVIG.jpg"
  }, 
  {
    "id": 314, 
    "name": "KEVIG", 
    "brand": "Ketoconazole 2% Soap", 
    "price": 169.0, 
    "schemes": [
      {
        "name": "20 + 4", 
        "description": "75 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/KEVIG_2.jpg"
  }, 
  {
    "id": 315, 
    "name": "KRISH", 
    "brand": "Papaya Soap with Aloe Vera, Honey and Cocoa Butter", 
    "price": 129.0, 
    "schemes": [
      {
        "name": "10 + 1", 
        "description": "100 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/KRISH.jpg"
  }, 
  {
    "id": 316, 
    "name": "M DERM-6", 
    "brand": "ktoconazole 20mg, Iodohloehydeoxyquinoline 10mg, Tolnaftat, Neomycin sulphate, clobetasol propionate & Dexpanthenol Ointment", 
    "price": 110.0, 
    "schemes": [
      {
        "name": "5 + 1", 
        "description": "15 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M_DERM-6.jpg"
  }, 
  {
    "id": 317, 
    "name": "LUNAC", 
    "brand": "Luliconazole 1 % Cream", 
    "price": 199.0, 
    "schemes": [
      {
        "name": "3 + 2", 
        "description": "20 gm"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/LUNAC.jpg"
  }, 
  {
    "id": 318, 
    "name": "PERLIS", 
    "brand": "Permethrin Soap Noodle Base", 
    "price": 149.0, 
    "schemes": [
      {
        "name": "20 + 4", 
        "description": "75 gms"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/PERLIS.jpg"
  }, 
  {
    "id": 319, 
    "name": "M95 ZC-500", 
    "brand": "Vitamin C - 500 mg, Vitamin D3 - 1000 I.U, Zinc Sulphate 10 mg ChewableTablets", 
    "price": 1350.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "10 X 15 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/M95_ZC-500.jpg"
  }, 
  {
    "id": 320, 
    "name": "ZINKOVIG", 
    "brand": "Multivitamins, Multiminerals with Zinc and Grape seed extract Tablets", 
    "price": 1200.0, 
    "schemes": [
      {
        "name": "2 + 1", 
        "description": "5 X 2 X 15 AA"
      }
    ], 
    "expiry": "Madhav Labs", 
    "image": "images/ZINKOVIG.jpg"
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
});

// Match query at the start of any word in name or brand
function matchesAtWordStarts(medicine, query) {
    if (!query) return true;
    const normalizedQuery = query.toLowerCase();
    const fields = [medicine.name || '', medicine.brand || ''];
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

// Determine price unit label based on description content
function getPriceUnitLabel(medicine) {
    try {
        if (medicine && Array.isArray(medicine.schemes)) {
            const hasMl = medicine.schemes.some(s => (s.description || '').toLowerCase().includes('ml'));
            return hasMl ? 'per bottle' : 'per box';
        }
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
    if (!medicine || !Array.isArray(medicine.schemes) || medicine.schemes.length === 0) return '';
    const desc = medicine.schemes[0].description || '';
    if (descriptionHasMl(desc)) return '';
    const firstNum = getFirstNumberBeforeX(desc);
    if (!firstNum || firstNum <= 0) return '';
    const perStrip = medicine.price / firstNum;
    return ` <small>(₹${perStrip.toFixed(2)} per strip)</small>`;
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
            <div class="medicine-brand">${medicine.brand}</div>
            <div class="medicine-price">₹${medicine.price} <small>(${getPriceUnitLabel(medicine)})</small></div>
            <div class="medicine-scheme">
                ${(() => {
                    if (medicine.schemes && medicine.schemes.length > 0) {
                        const scheme = medicine.schemes[0];
                        return `${scheme.name} - ${scheme.description}${getPerStripLabel(medicine)}`;
                    }
                    return '';
                })()}
            </div>
            <div class="medicine-quantity">
                <label for="quantity-${medicine.id}">Quantity:</label>
                <input type="number" id="quantity-${medicine.id}" class="quantity-input" value="1" min="1" max="10">
            </div>
            <div class="medicine-expiry">${medicine.expiry}</div>
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
            const defaultScheme = (medicine.schemes && medicine.schemes.length > 0) ? medicine.schemes[0].name : '';
            cart.push({
                ...medicine, 
                selectedScheme: defaultScheme, 
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
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
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
        totalPrice += item.price * item.quantity;
        
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
                <div class="cart-item-brand">${item.brand}</div>
                <div class="cart-item-price">₹${item.price} <small>(${getPriceUnitLabel(item)})</small></div>
                <div class="cart-item-qty">Qty: ${item.quantity}${item.selectedScheme ? ` • ${item.selectedScheme}` : ''}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    totalItems.textContent = totalQuantity;
    
    // Update total price display
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
    
    let totalOrderPrice = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalOrderPrice += itemTotal;
        
        orderMessage += `${index + 1}. *${item.name}* (${item.brand})\n`;
        orderMessage += `   Price: ₹${item.price} × ${item.quantity} = ₹${itemTotal}\n`;
        orderMessage += `   Quantity: ${item.quantity}${item.selectedScheme ? ` (Scheme: ${item.selectedScheme})` : ''}\n\n`;
    });
    
    orderMessage += `*Total Order Value: ₹${totalOrderPrice}*\n\n`;
    
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
