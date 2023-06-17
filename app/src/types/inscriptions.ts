export type Inscriptions = {
  "version": "0.1.0",
  "name": "inscriptions",
  "instructions": [
    {
      "name": "createInscription",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "root",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ordinal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ordinalInput",
          "type": {
            "defined": "CreateInscriptionInput"
          }
        }
      ]
    },
    {
      "name": "resizeInscription",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "inscription",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "ResizeInscriptionInput"
          }
        }
      ]
    },
    {
      "name": "writeToInscription",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "inscription",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "WriteToInscriptionInput"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "inscription",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "root",
            "type": "publicKey"
          },
          {
            "name": "size",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateInscriptionInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxDataLength",
            "type": "u32"
          },
          {
            "name": "authority",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "ResizeInscriptionInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "size",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "WriteToInscriptionInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "bytes"
          },
          {
            "name": "startPos",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "InscriptionEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Update"
          },
          {
            "name": "Resize"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "InscriptionEvent",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eventType",
          "type": {
            "defined": "InscriptionEventType"
          },
          "index": false
        }
      ]
    }
  ]
};

export const IDL: Inscriptions = {
  "version": "0.1.0",
  "name": "inscriptions",
  "instructions": [
    {
      "name": "createInscription",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "root",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ordinal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ordinalInput",
          "type": {
            "defined": "CreateInscriptionInput"
          }
        }
      ]
    },
    {
      "name": "resizeInscription",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "inscription",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "ResizeInscriptionInput"
          }
        }
      ]
    },
    {
      "name": "writeToInscription",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "inscription",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "WriteToInscriptionInput"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "inscription",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "root",
            "type": "publicKey"
          },
          {
            "name": "size",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateInscriptionInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxDataLength",
            "type": "u32"
          },
          {
            "name": "authority",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "ResizeInscriptionInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "size",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "WriteToInscriptionInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "bytes"
          },
          {
            "name": "startPos",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "InscriptionEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Update"
          },
          {
            "name": "Resize"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "InscriptionEvent",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eventType",
          "type": {
            "defined": "InscriptionEventType"
          },
          "index": false
        }
      ]
    }
  ]
};