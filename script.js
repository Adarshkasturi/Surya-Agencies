// Sample medicine data - you can replace this with your actual medicine database
const medicines = [
  {
    "id": 1,
    "name": "ABDAL",
    "brand": "Aceclofenac 100 mg Tab",
    "price": 900.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "20 x 10 ST"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL.jpg"
  },
  {
    "id": 2,
    "name": "ABDAL PLUS (BLISTER)",
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg Tab  (BLISTER)",
    "price": 1000.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "20 X 10 BL"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL_PLUS_BLISTER.jpg"
  },
  {
    "id": 3,
    "name": "ABDAL PLUS (ALU ALU)",
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg Tab (ALU ALU)",
    "price": 690.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10X10 AA"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL_PLUS_ALU_ALU.jpg"
  },
  {
    "id": 4,
    "name": "ABDAL - CZ (BLISTER)",
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg, Chloroxazone 250 mg Tab (Blister)",
    "price": 790.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10x10 BL"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL_-_CZ_BLISTER.jpg"
  },
  {
    "id": 5,
    "name": "ABDAL - CZ (ALU ALU)",
    "brand": "Aceclofenac 100 mg, Paracetamol 325mg, Chloroxazone 250 mg Tab(Alu Alu)",
    "price": 890.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10X10 AA"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL_-_CZ_ALU_ALU.jpg"
  },
  {
    "id": 6,
    "name": "ABDAL CZ-500",
    "brand": "Aceclofenac 100 mg",
    "price": 890.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 X 10 AA"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL_CZ-500.jpg"
  },
  {
    "id": 7,
    "name": "ABDAL SP",
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg & Serratiopeptidase 15 mg Tab",
    "price": 1200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "20 X 10 AA"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL_SP.jpg"
  },
  {
    "id": 8,
    "name": "ABDAL-MR",
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg & Chlorzoxazone 250 mg Tab",
    "price": 790.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-MR.jpg"
  },
  {
    "id": 9,
    "name": "ABDAL PLUS SYP",
    "brand": "Aceclofenac 50 mg, Paracetamol 125 mg, Syrup",
    "price": 79.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL_PLUS_SYP.jpg"
  },
  {
    "id": 10,
    "name": "ABDAL-P SYP",
    "brand": "Paracetamol 125 mg",
    "price": 59.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-P_SYP.jpg"
  },
  {
    "id": 11,
    "name": "ABDAL-SP-SYP",
    "brand": "Paracetamol 125 mg, Serratiopeptidase 2.5 mg",
    "price": 79.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-SP-SYP.jpg"
  },
  {
    "id": 12,
    "name": "ABDAL-400",
    "brand": "Aceclofenac 200 mg, Paracetamol 325 mg Tab",
    "price": 1050.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-400.jpg"
  },
  {
    "id": 13,
    "name": "ABDAL-P",
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg",
    "price": 1000.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-P.jpg"
  },
  {
    "id": 14,
    "name": "ABDAL-P (ALU ALU)",
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg",
    "price": 1200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-P_ALU_ALU.jpg"
  },
  {
    "id": 15,
    "name": "ABDAL-TH",
    "brand": "Aceclofenac 100 mg, Thiocolchicoside 4 mg Tab",
    "price": 590.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-TH.jpg"
  },
  {
    "id": 16,
    "name": "ABDAL-TH-8",
    "brand": "Aceclofenac 100 mg, Thiocolchicoside 8 mg Tab",
    "price": 890.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 X 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-TH-8.jpg"
  },
  {
    "id": 17,
    "name": "ABDAL-P-ORAL SUSPENSION",
    "brand": "Aceclofenac 50 mg, Paracetamol 125 mg",
    "price": 85.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-P-ORAL_SUSPENSION.jpg"
  },
  {
    "id": 18,
    "name": "ABDAL-T",
    "brand": "Aceclofenac 100 mg, Tizanidine 2 mg",
    "price": 590.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-T.jpg"
  },
  {
    "id": 19,
    "name": "ABDAL-S",
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg, Serratiopeptidase 15 mg",
    "price": 1200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 X 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-S.jpg"
  },
  {
    "id": 20,
    "name": "ABDAL-M",
    "brand": "Aceclofenac 100 mg, Paracetamol 325 mg, Thiocolchicoside 4 mg",
    "price": 600.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 X 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ABDAL-M.jpg"
  },
  {
    "id": 21,
    "name": "ALBICAL",
    "brand": "Calcium Citrate, Vitamin D3, Folic acid, Methycobalamine",
    "price": 390.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBICAL.jpg"
  },
  {
    "id": 22,
    "name": "ALBICAL-F",
    "brand": "Calcium citrate, Calcitriol, Folic Acid, Methylcobalamine, Vitamin K2-7",
    "price": 490.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBICAL-F.jpg"
  },
  {
    "id": 23,
    "name": "ALBICAL-XT",
    "brand": "Calcium Citrate, Zinc, Vitamin B12, Folic Acid & Vitamin D3",
    "price": 500.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBICAL-XT.jpg"
  },
  {
    "id": 24,
    "name": "ALBICAL-D3",
    "brand": "Calcium Carbonate, Calcitriol, Zinc & Magnesium",
    "price": 490.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBICAL-D3.jpg"
  },
  {
    "id": 25,
    "name": "ALBICAL-D3 (ORANGE FLAVOR)",
    "brand": "Calcium Carbonate, Calcitriol, Zinc & Magnesium",
    "price": 105.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "200 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBICAL-D3_ORANGE_FLAVOR.jpg"
  },
  {
    "id": 26,
    "name": "ALBICAL-D3 (PINEAPPLE)",
    "brand": "Calcium Carbonate, Calcitriol, Zinc & Magnesium",
    "price": 105.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "200 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBICAL-D3_PINEAPPLE.jpg"
  },
  {
    "id": 27,
    "name": "ALBICAL-K2",
    "brand": "Calcium Carbonate 1250 mg, Calcitriol 0.25 mcg, Vitamin K2-7 45 mcg, Mecobalamin 750 mcg, L-Methylfolate 800 mcg",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10x10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBICAL-K2.jpg"
  },
  {
    "id": 28,
    "name": "ALBICAL-K2-SOFTGEL",
    "brand": "Calcium Carbonate 1250 mg, Calcitriol 0.25 mcg, Vitamin K2-7 45 mcg, Mecobalamin 750 mcg, L-Methylfolate 800 mcg Softgel",
    "price": 600.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10x10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBICAL-K2-SOFTGEL.jpg"
  },
  {
    "id": 29,
    "name": "ALBICAL-D3 SACHET",
    "brand": "Cholecalciferol 60,000 I.U. Granules",
    "price": 28.00,
    "schemes": [
      {
        "name": "20 + 4",
        "description": "1 gm"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBICAL-D3_SACHET.jpg"
  },
  {
    "id": 30,
    "name": "AMITAB",
    "brand": "Amitriptyline 10 mg Tab",
    "price": 95.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AMITAB.jpg"
  },
  {
    "id": 31,
    "name": "AMITAB-25",
    "brand": "Amitriptyline 25 mg Tab",
    "price": 180.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AMITAB-25.jpg"
  },
  {
    "id": 32,
    "name": "AVAL-40",
    "brand": "Atorvastatin 40 mg Tab",
    "price": 1000.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-40.jpg"
  },
  {
    "id": 33,
    "name": "ALBIMIN",
    "brand": "Albumin 20% w/v Human I.P. 50 ml",
    "price": 5000.00,
    "schemes": [
      {
        "name": "1 + 1",
        "description": "50 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBIMIN.jpg"
  },
  {
    "id": 34,
    "name": "ALBIMIN-100",
    "brand": "Albumin 20% w/v Human I.P. 100 ml",
    "price": 9000.00,
    "schemes": [
      {
        "name": "1 + 1",
        "description": "100 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALBIMIN-100.jpg"
  },
  {
    "id": 35,
    "name": "ADJIV-500",
    "brand": "Azithromycin 500 mg Tab",
    "price": 285.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 3"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ADJIV-500.jpg"
  },
  {
    "id": 36,
    "name": "ADJIV-250",
    "brand": "Azithromycin 250 mg Tab",
    "price": 185.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 6"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ADJIV-250.jpg"
  },
  {
    "id": 37,
    "name": "AZI-L",
    "brand": "Azithromycin 250 mg Tab",
    "price": 185.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 6"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AZI-L.jpg"
  },
  {
    "id": 38,
    "name": "AZI-L-500",
    "brand": "Azithromycin 500 mg Tab",
    "price": 285.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 3"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AZI-L-500.jpg"
  },
  {
    "id": 39,
    "name": "ADJIV-200",
    "brand": "Azithromycin 200 mg / 5ml Suspension",
    "price": 99.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ADJIV-200.jpg"
  },
  {
    "id": 40,
    "name": "ADJIV-DRY SYP",
    "brand": "Azithromycin 200 mg Dry Syrup",
    "price": 89.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ADJIV-DRY_SYP.jpg"
  },
  {
    "id": 41,
    "name": "ADJIV-XL",
    "brand": "Azithromycin 200 mg / 5 ml Suspension",
    "price": 99.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ADJIV-XL.jpg"
  },
  {
    "id": 42,
    "name": "AMLOVID-5",
    "brand": "Amlodipine 5 mg Tab",
    "price": 140.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AMLOVID-5.jpg"
  },
  {
    "id": 43,
    "name": "AMLOVID-10",
    "brand": "Amlodipine 10 mg Tab",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AMLOVID-10.jpg"
  },
  {
    "id": 44,
    "name": "AMLOVID-L",
    "brand": "Amlodipine 5 mg, Losartan 50 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AMLOVID-L.jpg"
  },
  {
    "id": 45,
    "name": "AMLOVID-H",
    "brand": "Amlodipine 5 mg, Hydrochlorothiazide 12.5 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AMLOVID-H.jpg"
  },
  {
    "id": 46,
    "name": "AMLOVID-AT",
    "brand": "Amlodipine 5 mg, Atenolol 50 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AMLOVID-AT.jpg"
  },
  {
    "id": 47,
    "name": "ASTAVIT-10",
    "brand": "Atorvastatin 10 mg Tab",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ASTAVIT-10.jpg"
  },
  {
    "id": 48,
    "name": "ASTAVIT-20",
    "brand": "Atorvastatin 20 mg Tab",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ASTAVIT-20.jpg"
  },
  {
    "id": 49,
    "name": "AVAL-10",
    "brand": "Atorvastatin 10 mg Tab",
    "price": 250.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-10.jpg"
  },
  {
    "id": 50,
    "name": "AVAL-20",
    "brand": "Atorvastatin 20 mg Tab",
    "price": 490.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-20.jpg"
  },
  {
    "id": 51,
    "name": "AZI-L-200",
    "brand": "Azithromycin 200 mg / 5ml Suspension",
    "price": 99.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AZI-L-200.jpg"
  },
  {
    "id": 52,
    "name": "AVAL-ASP",
    "brand": "Atorvastatin 10 mg & Aspirin 75 mg Tab",
    "price": 290.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-ASP.jpg"
  },
  {
    "id": 53,
    "name": "AVAL-ASP-F",
    "brand": "Atorvastatin 10 mg & Aspirin 75 mg with Folic Acid & Vitamin B12 Tab",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-ASP-F.jpg"
  },
  {
    "id": 54,
    "name": "AVAL-AS-20",
    "brand": "Atorvastatin 20 mg, Aspirin 75 mg",
    "price": 490.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-AS-20.jpg"
  },
  {
    "id": 55,
    "name": "AVAL-EZ",
    "brand": "Atorvastatin 10 mg, Ezetimibe 10 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-EZ.jpg"
  },
  {
    "id": 56,
    "name": "AVAL-F",
    "brand": "Atorvastatin 10 mg, Fenofibrate 160 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-F.jpg"
  },
  {
    "id": 57,
    "name": "AMLOVID-BETA",
    "brand": "Amlodipine 5 mg, Metoprolol 50 mg",
    "price": 290.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AMLOVID-BETA.jpg"
  },
  {
    "id": 58,
    "name": "BETA-M-50",
    "brand": "Metoprolol 50 mg",
    "price": 190.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BETA-M-50.jpg"
  },
  {
    "id": 59,
    "name": "AVAL-GOLD",
    "brand": "Atorvastatin 10 mg, Aspirin 75 mg, Clopidogrel 75 mg",
    "price": 450.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-GOLD.jpg"
  },
  {
    "id": 60,
    "name": "AVAL-R",
    "brand": "Rosuvastatin 10 mg, Atorvastatin 10 mg",
    "price": 450.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-R.jpg"
  },
  {
    "id": 61,
    "name": "AVAL-AS-20-CL",
    "brand": "Atorvastatin 20 mg, Aspirin 75 mg, Clopidogrel 75 mg",
    "price": 550.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-AS-20-CL.jpg"
  },
  {
    "id": 62,
    "name": "AVAL-GOLD-20",
    "brand": "Atorvastatin 20 mg, Aspirin 75 mg, Clopidogrel 75 mg",
    "price": 550.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-GOLD-20.jpg"
  },
  {
    "id": 63,
    "name": "AZI-L-100",
    "brand": "Azithromycin 100 mg / 5ml Suspension",
    "price": 79.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AZI-L-100.jpg"
  },
  {
    "id": 64,
    "name": "ATOMIC",
    "brand": "Atorvastatin 10 mg, Amlodipine 5 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ATOMIC.jpg"
  },
  {
    "id": 65,
    "name": "AVAL-2.5",
    "brand": "Atorvastatin 2.5 mg",
    "price": 110.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AVAL-2.5.jpg"
  },
  {
    "id": 66,
    "name": "AZA-L-200",
    "brand": "Azithromycin 200 mg / 5 ml Suspension",
    "price": 99.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AZA-L-200.jpg"
  },
  {
    "id": 67,
    "name": "BALI-10",
    "brand": "Baclofen 10 mg",
    "price": 190.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BALI-10.jpg"
  },
  {
    "id": 68,
    "name": "BALI-20",
    "brand": "Baclofen 20 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BALI-20.jpg"
  },
  {
    "id": 69,
    "name": "BEN-L",
    "brand": "Benfotiamine 10 mg, Methylcobalamine 500 mcg, Alpha Lipoic Acid 100 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BEN-L.jpg"
  },
  {
    "id": 70,
    "name": "BILIVIT-M",
    "brand": "Bilastine 20 mg, Montelukast 10 mg",
    "price": 380.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BILIVIT-M.jpg"
  },
  {
    "id": 71,
    "name": "BIOCAL",
    "brand": "Calcitriol, Calcium Carbonate",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BIOCAL.jpg"
  },
  {
    "id": 72,
    "name": "BIOCAL-D3",
    "brand": "Cholecalciferol 60000 IU Softgel",
    "price": 280.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "10 x 4"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BIOCAL-D3.jpg"
  },
  {
    "id": 73,
    "name": "BIOCAL-SOFTGEL",
    "brand": "Calcitriol 0.25 mcg, Calcium Carbonate 500 mg, Zinc 7.5 mg, Magnesium Hydroxide 50 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BIOCAL-SOFTGEL.jpg"
  },
  {
    "id": 74,
    "name": "BIOCAL-K2",
    "brand": "Calcitriol, Calcium Carbonate, Vitamin K2-7, Zinc, Magnesium, Methylcobalamine",
    "price": 450.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BIOCAL-K2.jpg"
  },
  {
    "id": 75,
    "name": "BIFU-B",
    "brand": "Bifidobacterium, Fructo Oligosaccharide (FOS)",
    "price": 250.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BIFU-B.jpg"
  },
  {
    "id": 76,
    "name": "BILIVIT-20",
    "brand": "Bilastine 20 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BILIVIT-20.jpg"
  },
  {
    "id": 77,
    "name": "B-VIT-3G",
    "brand": "Ginseng, Ginkgo, Grape Seed Extract, Multivitamin",
    "price": 400.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/B-VIT-3G.jpg"
  },
  {
    "id": 78,
    "name": "BIOCAL-500",
    "brand": "Calcium Carbonate 500 mg, Vitamin D3 250 IU",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BIOCAL-500.jpg"
  },
  {
    "id": 79,
    "name": "BETA-M-XL-50",
    "brand": "Metoprolol Succinate 50 mg",
    "price": 190.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BETA-M-XL-50.jpg"
  },
  {
    "id": 80,
    "name": "BETA-M-XL-25",
    "brand": "Metoprolol Succinate 25 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BETA-M-XL-25.jpg"
  },
  {
    "id": 81,
    "name": "BETA-M-XL-100",
    "brand": "Metoprolol Succinate 100 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BETA-M-XL-100.jpg"
  },
  {
    "id": 82,
    "name": "BIFU-B-CAP",
    "brand": "Bifidobacterium, Fructo Oligosaccharide (FOS)",
    "price": 250.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/BIFU-B-CAP.jpg"
  },
  {
    "id": 83,
    "name": "CALM-B",
    "brand": "Bromazepam 3 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CALM-B.jpg"
  },
  {
    "id": 84,
    "name": "CALM-B-6",
    "brand": "Bromazepam 6 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CALM-B-6.jpg"
  },
  {
    "id": 85,
    "name": "CALM-L",
    "brand": "Lorazepam 1 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CALM-L.jpg"
  },
  {
    "id": 86,
    "name": "CALM-L-2",
    "brand": "Lorazepam 2 mg",
    "price": 150.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CALM-L-2.jpg"
  },
  {
    "id": 87,
    "name": "CALM-P",
    "brand": "Pregabalin 75 mg",
    "price": 290.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CALM-P.jpg"
  },
  {
    "id": 88,
    "name": "CALM-P-150",
    "brand": "Pregabalin 150 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CALM-P-150.jpg"
  },
  {
    "id": 89,
    "name": "CARVI-BETA-6.25",
    "brand": "Carvedilol 6.25 mg",
    "price": 120.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARVI-BETA-6.25.jpg"
  },
  {
    "id": 90,
    "name": "CARVI-BETA-12.5",
    "brand": "Carvedilol 12.5 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARVI-BETA-12.5.jpg"
  },
  {
    "id": 91,
    "name": "CARVI-BETA-25",
    "brand": "Carvedilol 25 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARVI-BETA-25.jpg"
  },
  {
    "id": 92,
    "name": "CARDIVIT-10",
    "brand": "Rosuvastatin 10 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARDIVIT-10.jpg"
  },
  {
    "id": 93,
    "name": "CARDIVIT-20",
    "brand": "Rosuvastatin 20 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARDIVIT-20.jpg"
  },
  {
    "id": 94,
    "name": "CARDIVIT-L-10",
    "brand": "Lisinopril 10 mg",
    "price": 200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARDIVIT-L-10.jpg"
  },
  {
    "id": 95,
    "name": "CALCIUM ACETATE 667 mg",
    "brand": "Calcium Acetate 667 mg Tab",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CALCIUM_ACETATE_667_mg.jpg"
  },
  {
    "id": 96,
    "name": "CALCIUM ACETATE 667 mg (ALU ALU)",
    "brand": "Calcium Acetate 667 mg Tab",
    "price": 600.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CALCIUM_ACETATE_667_mg_ALU_ALU.jpg"
  },
  {
    "id": 97,
    "name": "CARDIVIT-D",
    "brand": "Metoprolol 25 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARDIVIT-D.jpg"
  },
  {
    "id": 98,
    "name": "CARDIVIT-L-5",
    "brand": "Lisinopril 5 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARDIVIT-L-5.jpg"
  },
  {
    "id": 99,
    "name": "CARDIVIT-40",
    "brand": "Rosuvastatin 40 mg",
    "price": 990.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARDIVIT-40.jpg"
  },
  {
    "id": 100,
    "name": "CIPROMAD-500",
    "brand": "Ciprofloxacin 500 mg Tab",
    "price": 180.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CIPROMAD-500.jpg"
  },
  {
    "id": 101,
    "name": "CIPROMAD-L",
    "brand": "Ciprofloxacin 500 mg, Tinidazole 600 mg Tab",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CIPROMAD-L.jpg"
  },
  {
    "id": 102,
    "name": "CLODIN-50",
    "brand": "Clopidogrel 75 mg, Aspirin 75 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CLODIN-50.jpg"
  },
  {
    "id": 103,
    "name": "CLOPIDIN-A",
    "brand": "Clopidogrel 75 mg, Aspirin 75 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CLOPIDIN-A.jpg"
  },
  {
    "id": 104,
    "name": "CLOPIDIN-A-F",
    "brand": "Clopidogrel 75 mg, Aspirin 75 mg, Folic Acid & Vitamin B12",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CLOPIDIN-A-F.jpg"
  },
  {
    "id": 105,
    "name": "CLODIN",
    "brand": "Clopidogrel 75 mg",
    "price": 150.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CLODIN.jpg"
  },
  {
    "id": 106,
    "name": "CARVI-BETA",
    "brand": "Carvedilol 6.25 mg",
    "price": 120.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARVI-BETA.jpg"
  },
  {
    "id": 107,
    "name": "CARVI-BETA-T",
    "brand": "Carvedilol 6.25 mg, Olmesartan 20 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARVI-BETA-T.jpg"
  },
  {
    "id": 108,
    "name": "CARVI-BETA-T-20",
    "brand": "Carvedilol 20 mg, Telmisartan 40 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARVI-BETA-T-20.jpg"
  },
  {
    "id": 109,
    "name": "CARVI-BETA-D",
    "brand": "Carvedilol 6.25 mg, Hydrochlorothiazide 12.5 mg",
    "price": 200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CARVI-BETA-D.jpg"
  },
  {
    "id": 110,
    "name": "CEFIMAD-200",
    "brand": "Cefixime 200 mg Tab",
    "price": 290.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CEFIMAD-200.jpg"
  },
  {
    "id": 111,
    "name": "CEFIMAD-100",
    "brand": "Cefixime 100 mg Tab",
    "price": 180.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CEFIMAD-100.jpg"
  },
  {
    "id": 112,
    "name": "CEFIMAD-S-D",
    "brand": "Cefixime 200 mg, Ofloxacin 200 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CEFIMAD-S-D.jpg"
  },
  {
    "id": 113,
    "name": "CEFIMAD-C",
    "brand": "Cefixime 200 mg, Clavulanic Acid 125 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 6"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CEFIMAD-C.jpg"
  },
  {
    "id": 114,
    "name": "CEFIMAD-100 DRY SYP",
    "brand": "Cefixime 100 mg Dry Syrup",
    "price": 99.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CEFIMAD-100_DRY_SYP.jpg"
  },
  {
    "id": 115,
    "name": "CEFIMAD-S-D-DRY SYP",
    "brand": "Cefixime 50 mg, Ofloxacin 50 mg Dry Syrup",
    "price": 110.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CEFIMAD-S-D-DRY_SYP.jpg"
  },
  {
    "id": 116,
    "name": "CEFIMAD-C-DRY SYP",
    "brand": "Cefixime 50 mg, Clavulanic Acid 31.25 mg Dry Syrup",
    "price": 120.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CEFIMAD-C-DRY_SYP.jpg"
  },
  {
    "id": 117,
    "name": "CLODIN-AS-20",
    "brand": "Clopidogrel 75 mg, Aspirin 150 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CLODIN-AS-20.jpg"
  },
  {
    "id": 118,
    "name": "COBAMAD-P",
    "brand": "Methylcobalamine 1500 mcg, Pregabalin 75 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/COBAMAD-P.jpg"
  },
  {
    "id": 119,
    "name": "COBAMAD-P-150",
    "brand": "Methylcobalamine 1500 mcg, Pregabalin 150 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/COBAMAD-P-150.jpg"
  },
  {
    "id": 120,
    "name": "COBAMAD",
    "brand": "Methylcobalamine 500 mcg",
    "price": 200.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/COBAMAD.jpg"
  },
  {
    "id": 121,
    "name": "COBAMAD PLUS",
    "brand": "Methylcobalamine 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5 mg, Pyridoxine Hydrochloride 3 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/COBAMAD_PLUS.jpg"
  },
  {
    "id": 122,
    "name": "COBAMAD-1500",
    "brand": "Methylcobalamine 1500 mcg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/COBAMAD-1500.jpg"
  },
  {
    "id": 123,
    "name": "COBAMAD FORTE",
    "brand": "Methylcobalamine 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5 mg, Pyridoxine Hydrochloride 3 mg, Thiamine Mononitrate 10 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/COBAMAD_FORTE.jpg"
  },
  {
    "id": 124,
    "name": "CINEVIT",
    "brand": "Cinnarizine 20 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CINEVIT.jpg"
  },
  {
    "id": 125,
    "name": "CINEVIT-D",
    "brand": "Cinnarizine 20 mg, Domperidone 10 mg",
    "price": 180.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CINEVIT-D.jpg"
  },
  {
    "id": 126,
    "name": "CLOBEMAD",
    "brand": "Clobetasol Propionate 0.05%",
    "price": 38.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "15 gm"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CLOBEMAD.jpg"
  },
  {
    "id": 127,
    "name": "CLOBEMAD-S",
    "brand": "Clobetasol Propionate 0.05%, Salicylic Acid 6%",
    "price": 40.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "30 gm"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/CLOBEMAD-S.jpg"
  },
  {
    "id": 128,
    "name": "DICLO MAD",
    "brand": "Diclofenac Sodium 50 mg",
    "price": 140.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/DICLO_MAD.jpg"
  },
  {
    "id": 129,
    "name": "DICLO MAD INJ",
    "brand": "Diclofenac Sodium Injection",
    "price": 11.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "3 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/DICLO_MAD_INJ.jpg"
  },
  {
    "id": 130,
    "name": "DEFNIL-6",
    "brand": "Deflazacort 6 mg",
    "price": 190.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/DEFNIL-6.jpg"
  },
  {
    "id": 131,
    "name": "DEFNIL-12",
    "brand": "Deflazacort 12 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/DEFNIL-12.jpg"
  },
  {
    "id": 132,
    "name": "DEFNIL-30",
    "brand": "Deflazacort 30 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/DEFNIL-30.jpg"
  },
  {
    "id": 133,
    "name": "DULOVID-20",
    "brand": "Duloxetine 20 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/DULOVID-20.jpg"
  },
  {
    "id": 134,
    "name": "DULOVID-30",
    "brand": "Duloxetine 30 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/DULOVID-30.jpg"
  },
  {
    "id": 135,
    "name": "DULOVID-40",
    "brand": "Duloxetine 40 mg",
    "price": 450.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/DULOVID-40.jpg"
  },
  {
    "id": 136,
    "name": "DULOVID-60",
    "brand": "Duloxetine 60 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/DULOVID-60.jpg"
  },
  {
    "id": 137,
    "name": "EZEROD-10",
    "brand": "Ezetimibe 10 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/EZEROD-10.jpg"
  },
  {
    "id": 138,
    "name": "ETORIC-90",
    "brand": "Etoricoxib 90 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ETORIC-90.jpg"
  },
  {
    "id": 139,
    "name": "ETORIC-120",
    "brand": "Etoricoxib 120 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ETORIC-120.jpg"
  },
  {
    "id": 140,
    "name": "ETORIC-P",
    "brand": "Etoricoxib 90 mg, Paracetamol 325 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ETORIC-P.jpg"
  },
  {
    "id": 141,
    "name": "ETORIC-MR",
    "brand": "Etoricoxib 60 mg, Thiocolchicoside 4 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ETORIC-MR.jpg"
  },
  {
    "id": 142,
    "name": "ETORIC-TH",
    "brand": "Etoricoxib 90 mg, Thiocolchicoside 4 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ETORIC-TH.jpg"
  },
  {
    "id": 143,
    "name": "EZEROD-A",
    "brand": "Ezetimibe 10 mg, Atorvastatin 10 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/EZEROD-A.jpg"
  },
  {
    "id": 144,
    "name": "ETORIC-TH-8",
    "brand": "Etoricoxib 90 mg, Thiocolchicoside 8 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ETORIC-TH-8.jpg"
  },
  {
    "id": 145,
    "name": "FEXOMAD-120",
    "brand": "Fexofenadine 120 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/FEXOMAD-120.jpg"
  },
  {
    "id": 146,
    "name": "FEXOMAD-180",
    "brand": "Fexofenadine 180 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/FEXOMAD-180.jpg"
  },
  {
    "id": 147,
    "name": "FEXOMAD-M",
    "brand": "Fexofenadine 120 mg, Montelukast 10 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/FEXOMAD-M.jpg"
  },
  {
    "id": 148,
    "name": "FUROMAD-20",
    "brand": "Furosemide 20 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/FUROMAD-20.jpg"
  },
  {
    "id": 149,
    "name": "FEROMAD-XT",
    "brand": "Ferrous Ascorbate 100 mg, Folic Acid 1.5 mg",
    "price": 290.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/FEROMAD-XT.jpg"
  },
  {
    "id": 150,
    "name": "FEROMAD-M-SUSP",
    "brand": "Ferrous Ascorbate 30 mg, Folic Acid 500 mcg",
    "price": 110.00,
    "schemes": [
      {
        "name": "8 + 2",
        "description": "200 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/FEROMAD-M-SUSP.jpg"
  },
  {
    "id": 151,
    "name": "FEROMAD-XT-SYP",
    "brand": "Ferrous Ascorbate 30 mg, Folic Acid 500 mcg",
    "price": 110.00,
    "schemes": [
      {
        "name": "8 + 2",
        "description": "200 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/FEROMAD-XT-SYP.jpg"
  },
  {
    "id": 152,
    "name": "GABAMAD-NT-400",
    "brand": "Gabapentin 400 mg, Nortriptyline 10 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GABAMAD-NT-400.jpg"
  },
  {
    "id": 153,
    "name": "GABAMAD-NT-300",
    "brand": "Gabapentin 300 mg, Nortriptyline 10 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GABAMAD-NT-300.jpg"
  },
  {
    "id": 154,
    "name": "GABAMAD-M-1500",
    "brand": "Gabapentin 400 mg, Methylcobalamine 1500 mcg",
    "price": 450.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GABAMAD-M-1500.jpg"
  },
  {
    "id": 155,
    "name": "GABAMAD-M-100",
    "brand": "Gabapentin 100 mg, Methylcobalamine 500 mcg",
    "price": 180.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GABAMAD-M-100.jpg"
  },
  {
    "id": 156,
    "name": "GLIMAD-1",
    "brand": "Glimepiride 1 mg",
    "price": 80.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GLIMAD-1.jpg"
  },
  {
    "id": 157,
    "name": "GLIMAD-2",
    "brand": "Glimepiride 2 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GLIMAD-2.jpg"
  },
  {
    "id": 158,
    "name": "GLIMAD-M-1",
    "brand": "Glimepiride 1 mg, Metformin 500 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GLIMAD-M-1.jpg"
  },
  {
    "id": 159,
    "name": "GLIMAD-M-2",
    "brand": "Glimepiride 2 mg, Metformin 500 mg",
    "price": 150.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GLIMAD-M-2.jpg"
  },
  {
    "id": 160,
    "name": "GLIMAD-M-2-FORTE",
    "brand": "Glimepiride 2 mg, Metformin 1000 mg",
    "price": 200.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GLIMAD-M-2-FORTE.jpg"
  },
  {
    "id": 161,
    "name": "GENTLE-B",
    "brand": "Gabapentin 300 mg, Methylcobalamin 500 mcg",
    "price": 320.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GENTLE-B.jpg"
  },
  {
    "id": 162,
    "name": "GLIMAD-M-FORTE",
    "brand": "Glimepiride 1 mg, Metformin 1000 mg",
    "price": 120.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/GLIMAD-M-FORTE.jpg"
  },
  {
    "id": 163,
    "name": "IMIMAD-25",
    "brand": "Imipramine 25 mg",
    "price": 180.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/IMIMAD-25.jpg"
  },
  {
    "id": 164,
    "name": "IMIMAD-50",
    "brand": "Imipramine 50 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/IMIMAD-50.jpg"
  },
  {
    "id": 165,
    "name": "IRBMAD-H",
    "brand": "Irbesartan 150 mg, Hydrochlorothiazide 12.5 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/IRBMAD-H.jpg"
  },
  {
    "id": 166,
    "name": "IRBMAD-300",
    "brand": "Irbesartan 300 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/IRBMAD-300.jpg"
  },
  {
    "id": 167,
    "name": "IRBMAD-A",
    "brand": "Irbesartan 150 mg, Amlodipine 5 mg",
    "price": 450.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/IRBMAD-A.jpg"
  },
  {
    "id": 168,
    "name": "IRBMAD-AM",
    "brand": "Irbesartan 150 mg, Amlodipine 5 mg, Atenolol 50 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/IRBMAD-AM.jpg"
  },
  {
    "id": 169,
    "name": "ISOMAD-10",
    "brand": "Isosorbide Mononitrate 10 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ISOMAD-10.jpg"
  },
  {
    "id": 170,
    "name": "ISOMAD-20",
    "brand": "Isosorbide Mononitrate 20 mg",
    "price": 150.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ISOMAD-20.jpg"
  },
  {
    "id": 171,
    "name": "ISOMAD-SR-30",
    "brand": "Isosorbide Mononitrate 30 mg SR",
    "price": 180.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ISOMAD-SR-30.jpg"
  },
  {
    "id": 172,
    "name": "IMIMAD-200",
    "brand": "Imipramine 200 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/IMIMAD-200.jpg"
  },
  {
    "id": 173,
    "name": "LIVIMAD",
    "brand": "Levocetirizine 5 mg",
    "price": 120.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LIVIMAD.jpg"
  },
  {
    "id": 174,
    "name": "LIVIMAD-M",
    "brand": "Levocetirizine 5 mg, Montelukast 10 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LIVIMAD-M.jpg"
  },
  {
    "id": 175,
    "name": "LIVIMAD-M-KID",
    "brand": "Levocetirizine 2.5 mg, Montelukast 4 mg Tab",
    "price": 200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LIVIMAD-M-KID.jpg"
  },
  {
    "id": 176,
    "name": "LIVIMAD-DRY-SYP",
    "brand": "Levocetirizine 2.5 mg, Montelukast 4 mg Dry Syrup",
    "price": 110.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LIVIMAD-DRY-SYP.jpg"
  },
  {
    "id": 177,
    "name": "LIVIMAD-SYP",
    "brand": "Levocetirizine 2.5 mg",
    "price": 60.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LIVIMAD-SYP.jpg"
  },
  {
    "id": 178,
    "name": "LIVIMAD-M-SYP",
    "brand": "Levocetirizine 2.5 mg, Montelukast 4 mg",
    "price": 79.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LIVIMAD-M-SYP.jpg"
  },
  {
    "id": 179,
    "name": "LEVOF-500",
    "brand": "Levofloxacin 500 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LEVOF-500.jpg"
  },
  {
    "id": 180,
    "name": "LEVOF-A",
    "brand": "Levofloxacin 500 mg, Azithromycin 250 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LEVOF-A.jpg"
  },
  {
    "id": 181,
    "name": "LOSAMAD-50",
    "brand": "Losartan 50 mg",
    "price": 200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LOSAMAD-50.jpg"
  },
  {
    "id": 182,
    "name": "LOSAMAD-H",
    "brand": "Losartan 50 mg, Hydrochlorothiazide 12.5 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LOSAMAD-H.jpg"
  },
  {
    "id": 183,
    "name": "LOSAMAD-AM",
    "brand": "Losartan 50 mg, Amlodipine 5 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/LOSAMAD-AM.jpg"
  },
  {
    "id": 184,
    "name": "MADOMAC-500",
    "brand": "Ofloxacin 500 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADOMAC-500.jpg"
  },
  {
    "id": 185,
    "name": "MADOMAC-F",
    "brand": "Ofloxacin 400 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADOMAC-F.jpg"
  },
  {
    "id": 186,
    "name": "MADOMAC-L",
    "brand": "Ofloxacin 200 mg, Levofloxacin 250 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADOMAC-L.jpg"
  },
  {
    "id": 187,
    "name": "MADOMAC-O-200",
    "brand": "Ofloxacin 200 mg",
    "price": 200.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADOMAC-O-200.jpg"
  },
  {
    "id": 188,
    "name": "MADOMAC-OZ",
    "brand": "Ofloxacin 200 mg, Ornidazole 500 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADOMAC-OZ.jpg"
  },
  {
    "id": 189,
    "name": "MADOMAC-DRY-SYP",
    "brand": "Ofloxacin 50 mg Dry Syrup",
    "price": 79.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADOMAC-DRY-SYP.jpg"
  },
  {
    "id": 190,
    "name": "MADOMAC-O-100",
    "brand": "Ofloxacin 100 mg Dry Syrup",
    "price": 79.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADOMAC-O-100.jpg"
  },
  {
    "id": 191,
    "name": "MADOMAC-M",
    "brand": "Ofloxacin 100 mg, Metronidazole 100 mg",
    "price": 180.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADOMAC-M.jpg"
  },
  {
    "id": 192,
    "name": "MADOMAC-D",
    "brand": "Ofloxacin 100 mg, Ornidazole 100 mg",
    "price": 180.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADOMAC-D.jpg"
  },
  {
    "id": 193,
    "name": "MECOMAD-D3",
    "brand": "Methylcobalamine 1500 mcg, Calcium Carbonate 500 mg",
    "price": 500.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MECOMAD-D3.jpg"
  },
  {
    "id": 194,
    "name": "MECOMAD-F",
    "brand": "Methylcobalamine 1500 mcg, Folic Acid 1.5 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MECOMAD-F.jpg"
  },
  {
    "id": 195,
    "name": "MECOMAD-L",
    "brand": "Methylcobalamine 1500 mcg, Alpha Lipoic Acid 100 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MECOMAD-L.jpg"
  },
  {
    "id": 196,
    "name": "MECOMAD-PLUS",
    "brand": "Methylcobalamine 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5 mg, Pyridoxine Hydrochloride 3 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MECOMAD-PLUS.jpg"
  },
  {
    "id": 197,
    "name": "MECOMAD-GOLD",
    "brand": "Methylcobalamine 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5 mg, Pyridoxine Hydrochloride 3 mg, Thiamine Mononitrate 10 mg",
    "price": 450.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MECOMAD-GOLD.jpg"
  },
  {
    "id": 198,
    "name": "MECOMAD-P",
    "brand": "Methylcobalamine 1500 mcg, Pregabalin 75 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MECOMAD-P.jpg"
  },
  {
    "id": 199,
    "name": "MECOMAD-P-150",
    "brand": "Methylcobalamine 1500 mcg, Pregabalin 150 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MECOMAD-P-150.jpg"
  },
  {
    "id": 200,
    "name": "MECOBAL-1500",
    "brand": "Methylcobalamine 1500 mcg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MECOBAL-1500.jpg"
  },
  {
    "id": 201,
    "name": "MECOBAL-750",
    "brand": "Methylcobalamine 750 mcg",
    "price": 250.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MECOBAL-750.jpg"
  },
  {
    "id": 202,
    "name": "MONTEMAD-10",
    "brand": "Montelukast 10 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MONTEMAD-10.jpg"
  },
  {
    "id": 203,
    "name": "MONTEMAD-L",
    "brand": "Montelukast 10 mg, Levocetirizine 5 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MONTEMAD-L.jpg"
  },
  {
    "id": 204,
    "name": "MONTEMAD-L-KID",
    "brand": "Montelukast 4 mg, Levocetirizine 2.5 mg",
    "price": 180.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MONTEMAD-L-KID.jpg"
  },
  {
    "id": 205,
    "name": "MONTEMAD-DRY-SYP",
    "brand": "Montelukast 4 mg, Levocetirizine 2.5 mg Dry Syrup",
    "price": 110.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MONTEMAD-DRY-SYP.jpg"
  },
  {
    "id": 206,
    "name": "MONTEMAD-L-SYP",
    "brand": "Montelukast 4 mg, Levocetirizine 2.5 mg Syrup",
    "price": 79.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MONTEMAD-L-SYP.jpg"
  },
  {
    "id": 207,
    "name": "METOMAD-25",
    "brand": "Metoprolol 25 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/METOMAD-25.jpg"
  },
  {
    "id": 208,
    "name": "METOMAD-50",
    "brand": "Metoprolol 50 mg",
    "price": 180.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/METOMAD-50.jpg"
  },
  {
    "id": 209,
    "name": "METOMAD-XL-25",
    "brand": "Metoprolol Succinate 25 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/METOMAD-XL-25.jpg"
  },
  {
    "id": 210,
    "name": "METOMAD-XL-50",
    "brand": "Metoprolol Succinate 50 mg",
    "price": 190.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/METOMAD-XL-50.jpg"
  },
  {
    "id": 211,
    "name": "METOMAD-A",
    "brand": "Metoprolol 50 mg, Amlodipine 5 mg",
    "price": 290.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/METOMAD-A.jpg"
  },
  {
    "id": 212,
    "name": "MECOBAL-1500 INJ",
    "brand": "Methylcobalamine 1500 mcg Injection",
    "price": 280.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "1 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MECOBAL-1500_INJ.jpg"
  },
  {
    "id": 213,
    "name": "NEUROVID-NT",
    "brand": "Gabapentin 300 mg, Nortriptyline 10 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/NEUROVID-NT.jpg"
  },
  {
    "id": 214,
    "name": "NEUROVID-M",
    "brand": "Gabapentin 300 mg, Methylcobalamine 500 mcg",
    "price": 320.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/NEUROVID-M.jpg"
  },
  {
    "id": 215,
    "name": "NEUROVID-M-1500",
    "brand": "Gabapentin 400 mg, Methylcobalamine 1500 mcg",
    "price": 450.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/NEUROVID-M-1500.jpg"
  },
  {
    "id": 216,
    "name": "NORIMAD-T",
    "brand": "Norfloxacin 400 mg",
    "price": 200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/NORIMAD-T.jpg"
  },
  {
    "id": 217,
    "name": "NORIMAD-TZ",
    "brand": "Norfloxacin 400 mg, Tinidazole 600 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/NORIMAD-TZ.jpg"
  },
  {
    "id": 218,
    "name": "NORIMAD-L",
    "brand": "Norfloxacin 400 mg, Tinidazole 600 mg, Lactic Acid Bacillus",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/NORIMAD-L.jpg"
  },
  {
    "id": 219,
    "name": "NORIMAD-FORTE",
    "brand": "Norfloxacin 400 mg, Metronidazole 400 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/NORIMAD-FORTE.jpg"
  },
  {
    "id": 220,
    "name": "ONDIMAD-4",
    "brand": "Ondansetron 4 mg Tab",
    "price": 100.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ONDIMAD-4.jpg"
  },
  {
    "id": 221,
    "name": "ONDIMAD-8",
    "brand": "Ondansetron 8 mg Tab",
    "price": 150.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ONDIMAD-8.jpg"
  },
  {
    "id": 222,
    "name": "ONDIMAD-SYP",
    "brand": "Ondansetron 2 mg/5 ml Syrup",
    "price": 40.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ONDIMAD-SYP.jpg"
  },
  {
    "id": 223,
    "name": "OMEMAD-20",
    "brand": "Omeprazole 20 mg",
    "price": 80.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/OMEMAD-20.jpg"
  },
  {
    "id": 224,
    "name": "OMEMAD-D",
    "brand": "Omeprazole 20 mg, Domperidone 10 mg",
    "price": 120.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/OMEMAD-D.jpg"
  },
  {
    "id": 225,
    "name": "OMEMAD-D-FORTE",
    "brand": "Omeprazole 20 mg, Domperidone 20 mg",
    "price": 140.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/OMEMAD-D-FORTE.jpg"
  },
  {
    "id": 226,
    "name": "ONDIMAD-INJ",
    "brand": "Ondansetron 2 mg/ml",
    "price": 15.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "2 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ONDIMAD-INJ.jpg"
  },
  {
    "id": 227,
    "name": "PARACETAMAD-500",
    "brand": "Paracetamol 500 mg Tab",
    "price": 30.00,
    "schemes": [
      {
        "name": "20 + 4",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PARACETAMAD-500.jpg"
  },
  {
    "id": 228,
    "name": "PARACETAMAD-650",
    "brand": "Paracetamol 650 mg Tab",
    "price": 50.00,
    "schemes": [
      {
        "name": "20 + 4",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PARACETAMAD-650.jpg"
  },
  {
    "id": 229,
    "name": "PANMAD-40",
    "brand": "Pantoprazole 40 mg",
    "price": 180.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PANMAD-40.jpg"
  },
  {
    "id": 230,
    "name": "PANMAD-D",
    "brand": "Pantoprazole 40 mg, Domperidone 10 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PANMAD-D.jpg"
  },
  {
    "id": 231,
    "name": "PANMAD-DSR",
    "brand": "Pantoprazole 40 mg, Domperidone 30 mg SR",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PANMAD-DSR.jpg"
  },
  {
    "id": 232,
    "name": "PANMAD-L",
    "brand": "Pantoprazole 40 mg, Levosulpiride 75 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PANMAD-L.jpg"
  },
  {
    "id": 233,
    "name": "PANMAD-IT",
    "brand": "Pantoprazole 40 mg, Itopride 150 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PANMAD-IT.jpg"
  },
  {
    "id": 234,
    "name": "PANMAD-LS",
    "brand": "Pantoprazole 40 mg, Levosulpiride 75 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PANMAD-LS.jpg"
  },
  {
    "id": 235,
    "name": "PANMAD-PLUS",
    "brand": "Pantoprazole 40 mg, Domperidone 10 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PANMAD-PLUS.jpg"
  },
  {
    "id": 236,
    "name": "PIOGLAD-15",
    "brand": "Pioglitazone 15 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PIOGLAD-15.jpg"
  },
  {
    "id": 237,
    "name": "PIOGLAD-30",
    "brand": "Pioglitazone 30 mg",
    "price": 150.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PIOGLAD-30.jpg"
  },
  {
    "id": 238,
    "name": "PIOGLAD-M-15",
    "brand": "Pioglitazone 15 mg, Metformin 500 mg",
    "price": 150.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PIOGLAD-M-15.jpg"
  },
  {
    "id": 239,
    "name": "PIOGLAD-M-30",
    "brand": "Pioglitazone 30 mg, Metformin 500 mg",
    "price": 200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PIOGLAD-M-30.jpg"
  },
  {
    "id": 240,
    "name": "PIOGLAD-M-FORTE",
    "brand": "Pioglitazone 30 mg, Metformin 1000 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PIOGLAD-M-FORTE.jpg"
  },
  {
    "id": 241,
    "name": "PARACETAMAD-D",
    "brand": "Paracetamol 500 mg, Domperidone 10 mg",
    "price": 50.00,
    "schemes": [
      {
        "name": "20 + 4",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PARACETAMAD-D.jpg"
  },
  {
    "id": 242,
    "name": "PARACETAMAD-SYP",
    "brand": "Paracetamol 125 mg Syrup",
    "price": 40.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PARACETAMAD-SYP.jpg"
  },
  {
    "id": 243,
    "name": "PARACETAMAD-650 SYP",
    "brand": "Paracetamol 250 mg Syrup",
    "price": 60.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PARACETAMAD-650_SYP.jpg"
  },
  {
    "id": 244,
    "name": "PROMAD-20",
    "brand": "Propranolol 20 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PROMAD-20.jpg"
  },
  {
    "id": 245,
    "name": "PROMAD-40",
    "brand": "Propranolol 40 mg",
    "price": 120.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PROMAD-40.jpg"
  },
  {
    "id": 246,
    "name": "PROMAD-PLUS",
    "brand": "Propranolol 40 mg, Flunarizine 10 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/PROMAD-PLUS.jpg"
  },
  {
    "id": 247,
    "name": "RABEMAD-20",
    "brand": "Rabeprazole 20 mg",
    "price": 180.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/RABEMAD-20.jpg"
  },
  {
    "id": 248,
    "name": "RABEMAD-D",
    "brand": "Rabeprazole 20 mg, Domperidone 10 mg",
    "price": 200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/RABEMAD-D.jpg"
  },
  {
    "id": 249,
    "name": "RABEMAD-DSR",
    "brand": "Rabeprazole 20 mg, Domperidone 30 mg SR",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/RABEMAD-DSR.jpg"
  },
  {
    "id": 250,
    "name": "RABEMAD-L",
    "brand": "Rabeprazole 20 mg, Levosulpiride 75 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/RABEMAD-L.jpg"
  },
  {
    "id": 251,
    "name": "RABEMAD-LS",
    "brand": "Rabeprazole 20 mg, Levosulpiride 75 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/RABEMAD-LS.jpg"
  },
  {
    "id": 252,
    "name": "RABEMAD-IT",
    "brand": "Rabeprazole 20 mg, Itopride 150 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/RABEMAD-IT.jpg"
  },
  {
    "id": 253,
    "name": "RABEMAD-DSR (ALU)",
    "brand": "Rabeprazole 20 mg, Domperidone 30 mg SR",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/RABEMAD-DSR_ALU.jpg"
  },
  {
    "id": 254,
    "name": "RABEMAD-DSR-FORTE",
    "brand": "Rabeprazole 40 mg, Domperidone 30 mg SR",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/RABEMAD-DSR-FORTE.jpg"
  },
  {
    "id": 255,
    "name": "RABEMAD-DSR (ALU)-FORTE",
    "brand": "Rabeprazole 40 mg, Domperidone 30 mg SR",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/RABEMAD-DSR_ALU-FORTE.jpg"
  },
  {
    "id": 256,
    "name": "VITAMAD-D3",
    "brand": "Cholecalciferol 60000 IU",
    "price": 280.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "10 x 4"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-D3.jpg"
  },
  {
    "id": 257,
    "name": "VITAMAD-C",
    "brand": "Cholecalciferol 60000 IU",
    "price": 280.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "10 x 4"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-C.jpg"
  },
  {
    "id": 258,
    "name": "VITAMAD-AD",
    "brand": "Multivitamin",
    "price": 250.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-AD.jpg"
  },
  {
    "id": 259,
    "name": "VITAMAD-CD",
    "brand": "Multivitamin",
    "price": 250.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-CD.jpg"
  },
  {
    "id": 260,
    "name": "VITAMAD-L",
    "brand": "Multivitamin",
    "price": 250.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-L.jpg"
  },
  {
    "id": 261,
    "name": "VITAMAD-C-SOFTGEL",
    "brand": "Multivitamin",
    "price": 320.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-C-SOFTGEL.jpg"
  },
  {
    "id": 262,
    "name": "VITAMAD-Z",
    "brand": "Multivitamin with Zinc",
    "price": 320.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-Z.jpg"
  },
  {
    "id": 263,
    "name": "VITAMAD-G",
    "brand": "Multivitamin with Ginseng",
    "price": 350.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-G.jpg"
  },
  {
    "id": 264,
    "name": "VITAMAD-3G",
    "brand": "Multivitamin with Ginseng, Ginkgo, Grape Seed Extract",
    "price": 400.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-3G.jpg"
  },
  {
    "id": 265,
    "name": "VITAMAD-M",
    "brand": "Multivitamin, Multimineral",
    "price": 350.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-M.jpg"
  },
  {
    "id": 266,
    "name": "VITAMAD-L-200",
    "brand": "Multivitamin, Multimineral",
    "price": 105.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "200 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-L-200.jpg"
  },
  {
    "id": 267,
    "name": "VITAMAD-Z-200",
    "brand": "Multivitamin, Multimineral",
    "price": 105.00,
    "schemes": [
      {
        "name": "10 + 2",
        "description": "200 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VITAMAD-Z-200.jpg"
  },
  {
    "id": 268,
    "name": "VULCAN-M-500",
    "brand": "Voglibose 0.2 mg, Metformin 500 mg",
    "price": 180.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-M-500.jpg"
  },
  {
    "id": 269,
    "name": "VULCAN-M-1",
    "brand": "Voglibose 0.3 mg, Metformin 500 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-M-1.jpg"
  },
  {
    "id": 270,
    "name": "VULCAN-G-1",
    "brand": "Voglibose 0.2 mg, Glimepiride 1 mg, Metformin 500 mg",
    "price": 250.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-G-1.jpg"
  },
  {
    "id": 271,
    "name": "VULCAN-G-2",
    "brand": "Voglibose 0.2 mg, Glimepiride 2 mg, Metformin 500 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-G-2.jpg"
  },
  {
    "id": 272,
    "name": "VULCAN-G-3",
    "brand": "Voglibose 0.3 mg, Glimepiride 1 mg, Metformin 500 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-G-3.jpg"
  },
  {
    "id": 273,
    "name": "VULCAN-G-4",
    "brand": "Voglibose 0.3 mg, Glimepiride 2 mg, Metformin 500 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-G-4.jpg"
  },
  {
    "id": 274,
    "name": "VULCAN-V",
    "brand": "Voglibose 0.3 mg",
    "price": 150.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-V.jpg"
  },
  {
    "id": 275,
    "name": "VULCAN-G-1-FORTE",
    "brand": "Voglibose 0.2 mg, Glimepiride 1 mg, Metformin 1000 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-G-1-FORTE.jpg"
  },
  {
    "id": 276,
    "name": "VULCAN-G-2-FORTE",
    "brand": "Voglibose 0.2 mg, Glimepiride 2 mg, Metformin 1000 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-G-2-FORTE.jpg"
  },
  {
    "id": 277,
    "name": "VULCAN-G-3-FORTE",
    "brand": "Voglibose 0.3 mg, Glimepiride 1 mg, Metformin 1000 mg",
    "price": 380.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-G-3-FORTE.jpg"
  },
  {
    "id": 278,
    "name": "VULCAN-G-4-FORTE",
    "brand": "Voglibose 0.3 mg, Glimepiride 2 mg, Metformin 1000 mg",
    "price": 450.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-G-4-FORTE.jpg"
  },
  {
    "id": 279,
    "name": "VULCAN-V-0.2",
    "brand": "Voglibose 0.2 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/VULCAN-V-0.2.jpg"
  },
  {
    "id": 280,
    "name": "MADHAZ-20",
    "brand": "Telmisartan 20 mg",
    "price": 100.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADHAZ-20.jpg"
  },
  {
    "id": 281,
    "name": "MADHAZ-40",
    "brand": "Telmisartan 40 mg",
    "price": 200.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADHAZ-40.jpg"
  },
  {
    "id": 282,
    "name": "MADHAZ-80",
    "brand": "Telmisartan 80 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADHAZ-80.jpg"
  },
  {
    "id": 283,
    "name": "MADHAZ-H",
    "brand": "Telmisartan 40 mg, Hydrochlorothiazide 12.5 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADHAZ-H.jpg"
  },
  {
    "id": 284,
    "name": "MADHAZ-AM",
    "brand": "Telmisartan 40 mg, Amlodipine 5 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADHAZ-AM.jpg"
  },
  {
    "id": 285,
    "name": "MADHAZ-AM-80",
    "brand": "Telmisartan 80 mg, Amlodipine 5 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADHAZ-AM-80.jpg"
  },
  {
    "id": 286,
    "name": "MADHAZ-Beta",
    "brand": "Telmisartan 40 mg, Metoprolol Succinate 50 mg",
    "price": 350.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADHAZ-Beta.jpg"
  },
  {
    "id": 287,
    "name": "MADHAZ-Beta-25",
    "brand": "Telmisartan 40 mg, Metoprolol Succinate 25 mg",
    "price": 280.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADHAZ-Beta-25.jpg"
  },
  {
    "id": 288,
    "name": "MADHAZ-A",
    "brand": "Telmisartan 40 mg, Amlodipine 5 mg",
    "price": 320.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADHAZ-A.jpg"
  },
  {
    "id": 289,
    "name": "MADHAZ-H-80",
    "brand": "Telmisartan 80 mg, Hydrochlorothiazide 12.5 mg",
    "price": 400.00,
    "schemes": [
      {
        "name": "4 + 1",
        "description": "10 x 10"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/MADHAZ-H-80.jpg"
  },
  {
    "id": 290,
    "name": "AZI-L-200",
    "brand": "Azithromycin 200 mg / 5ml Suspension",
    "price": 99.00,
    "schemes": [
      {
        "name": "5 + 1",
        "description": "30 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/AZI-L-200.jpg"
  },
  {
    "id": 291,
    "name": "ALUBEST Cream",
    "brand": "Aloes & Vitamin-E (Cream)",
    "price": 149.00,
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
    "id": 292,
    "name": "ALUBEST  Soap",
    "brand": "Glycerine, Alovera, Vit E, Liquid Paraffin Light, Olive Oil, Jojoba Oil  75 gms SOAP",
    "price": 95.00,
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
    "id": 293,
    "name": "ALUBEST-TS",
    "brand": "Enriched with Aloe vera,Tulasi & Sandal",
    "price": 129.00,
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
    "id": 294,
    "name": "ALUBEST Lotion",
    "brand": "Aloes,Vitamin-E ,Jojaba Oil ,Squalene Lotion",
    "price": 149.00,
    "schemes": [
      {
        "name": "8  +  2",
        "description": "100 ml Pet"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ALUBEST_Lotion.jpg"
  },
  {
    "id": 295,
    "name": "ACKVIG",
    "brand": "Tea Tree Oil, Allantoin and Vit E Acetate Soap",
    "price": 119.00,
    "schemes": [
      {
        "name": "20  +  4",
        "description": "75 gm"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/ACKVIG.jpg"
  },
  {
    "id": 296,
    "name": "KEVIG",
    "brand": "Ketoconazole 2%, ZPTO 1 %  Shampoo",
    "price": 189.00,
    "schemes": [
      {
        "name": "4  +  1",
        "description": "60 ml"
      }
    ],
    "expiry": "Madhav Labs",
    "image": "images/KEVIG.jpg"
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
            const filteredMedicines = medicines.filter(medicine => 
                medicine.name.toLowerCase().startsWith(searchTerm) ||
                medicine.brand.toLowerCase().startsWith(searchTerm) ||
                medicine.name.toLowerCase().replace(/\s+/g, '').startsWith(searchTerm.replace(/\s+/g, '')) ||
                medicine.brand.toLowerCase().replace(/\s+/g, '').startsWith(searchTerm.replace(/\s+/g, ''))
            );
            
            displayMedicinesList(filteredMedicines);
            clearSearchBtn.style.display = 'inline-block';
        }
    });
});

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
    
    const filteredMedicines = medicines.filter(medicine => 
        medicine.name.toLowerCase().startsWith(searchTerm) ||
        medicine.brand.toLowerCase().startsWith(searchTerm) ||
        medicine.name.toLowerCase().replace(/\s+/g, '').startsWith(searchTerm.replace(/\s+/g, '')) ||
        medicine.brand.toLowerCase().replace(/\s+/g, '').startsWith(searchTerm.replace(/\s+/g, ''))
    );
    
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
